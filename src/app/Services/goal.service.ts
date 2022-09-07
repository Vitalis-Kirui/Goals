import { Injectable } from '@angular/core';
import { Goals } from '../Backend/goal-list';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  //Getting all the goals
  getGoals() {
    return Goals;
  }

  //Fetching a single goal
  getGoal(id: number) {
    for (let goal of Goals) {
      if (goal.id == id) {
        return goal;
      }
    }
    return
  }

  constructor() { }
}
