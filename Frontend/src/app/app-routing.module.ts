import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from './survey/survey.component';
import { WinLosePageComponent } from './win-lose-page/win-lose-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/survey', pathMatch: 'full'},
  {path: 'survey', component: SurveyComponent},
  {path: 'win-lose/:mean', component: WinLosePageComponent},
  {path: 'student/:id', component: StudentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
