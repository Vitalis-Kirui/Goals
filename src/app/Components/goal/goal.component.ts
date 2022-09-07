import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/Classes/goal';
import { GoalService } from 'src/app/Services/goal.service';
import { AlertService } from 'src/app/Services/alert.service';
import { QuoteService } from 'src/app/Services/quote.service';
import { Quote } from 'src/app/Classes/quote';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals!: Goal[];
  
  quote !: Quote;

  //Delete button functionality
  delete(index: number) {

    let confirmation = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

    if (confirmation) {
      this.goals.splice(index, 1);
      this.alert.alertMe("The goal has been successfully deleted.")
    }
    
  }

  //See more details functionality
  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  //Adding new goal function
  addNewGoal(goal: Goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completionDate = new Date(goal.completionDate)
    this.goals.push(goal);
  }

  //Open goal function
  openGoal(id: number) {
    this.router.navigate(['/goals', id]);
  }

  constructor(private service: GoalService, private alert : AlertService, private quoteService : QuoteService, private router : Router) { 

    this.goals = this.service.getGoals();
    
  }

  ngOnInit() {

    this.quoteService.quoteRequest();
    this.quote = this.quoteService.quote;

  }

}
