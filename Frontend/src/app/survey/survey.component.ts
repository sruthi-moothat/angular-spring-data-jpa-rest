import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService} from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  newStudent: Student = new Student();
  thingsLiked = [];

  listofNumbers: string;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.newStudent.thingsYouLiked = '['+ this.thingsLiked.join() + ']';
    console.log(this.newStudent);
    let mean = this.meanCalculator();

    // The Post request.
    this.studentService.createStudent(this.newStudent).subscribe(() => {
      this.router.navigate([`/win-lose/${mean}`]);
    });

  }

  meanCalculator() {
    let list = this.listofNumbers.split(',').map(Number);
    let mean = 0;
    for (let i = 0; i < list.length; i++) {
      mean += list[i];
    }
    return mean/list.length;
  }

  onCheckboxChange(event, value) {
    if (event.target.checked) {

      this.thingsLiked.push(value);
    } 
    if (!event.target.checked) {

      let index = this.thingsLiked.indexOf(value);

      if (index > -1) {

        this.thingsLiked.splice(index, 1);
      }
    }
  }

}
