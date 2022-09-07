import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './Components/goal/goal.component';
import { GoalDetailComponent } from './Components/goal-detail/goal-detail.component';
import { DateCountPipe } from './Pipes/date-count.pipe';
import { StrikethroughDirective } from './Directives/strikethrough.directive';
import { FormComponent } from './Components/form/form.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    DateCountPipe,
    StrikethroughDirective,
    FormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
