import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from 'src/app/Classes/goal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

// Two way data binding
  newGoal = new Goal(0, "", "", new Date());

  //Emitting add goal event
  @Output() addGoal = new EventEmitter<Goal>();
  
  submitGoal() {
    this.addGoal.emit(this.newGoal);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
