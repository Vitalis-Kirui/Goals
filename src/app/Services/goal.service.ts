import { Injectable } from '@angular/core';
import { Goals } from '../Backend/goal-list';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals() {
    return Goals;
  }

  constructor() { }
}
