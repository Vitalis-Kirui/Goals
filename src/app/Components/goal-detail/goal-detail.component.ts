import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Goal } from 'src/app/Classes/goal';
import { GoalService } from 'src/app/Services/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  goal: Goal | any;
  
  //passing parameters
  // @Input() goal!: Goal;

  constructor(private service : GoalService, private route : ActivatedRoute) { }

  ngOnInit() {

    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.goal = this.service.getGoal(id);

  }

}
