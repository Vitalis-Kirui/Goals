import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { GoalDetailComponent } from './Components/goal-detail/goal-detail.component';
import { GoalComponent } from './Components/goal/goal.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [

  { path: 'goals', component: GoalComponent },
  { path: 'about', component: AboutComponent },
  {path:"goals/:id", component: GoalDetailComponent},
  { path: '', redirectTo: "goals", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
