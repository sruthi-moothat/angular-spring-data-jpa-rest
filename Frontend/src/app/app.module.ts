import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { WinLosePageComponent } from './win-lose-page/win-lose-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    WinLosePageComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
