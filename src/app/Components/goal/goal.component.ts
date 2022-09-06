import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/Classes/goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    
    new Goal(1, "Angular.", "Master angular for frontend purposes.", new Date(2022, 8, 30)),
    new Goal(2, "Django.", "Master Django for Backend purposes.", new Date(2022, 9, 31)),
    new Goal(3, "Projects.", "Do practice on personal projects and real clients projects.", new Date(2022, 11, 30))
    
  ]

  //Delete button functionality
  delete(index: number) {

    let confirmation = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

    if (confirmation) {
      this.goals.splice(index , 1)
    }
    
  }

  //See more details functionality
  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
