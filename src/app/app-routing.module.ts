import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { GoalComponent } from './Components/goal/goal.component';

const routes: Routes = [

  { path: 'goals', component: GoalComponent },
  {path: 'about', component : AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
