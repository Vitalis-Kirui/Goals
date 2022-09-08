import { Component, Input, OnInit } from '@angular/core';
import { Goal } from 'src/app/Classes/goal';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {

  //Input binding property
  @Input() goal! : Goal;

  constructor() { }

  ngOnInit(): void {
  }

}
