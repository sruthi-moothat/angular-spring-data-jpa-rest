import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student.model';
import { StudentService} from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }
  student: Student;
  id: number;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.studentService.getStudent(this.id).subscribe((student: Student) => {
        this.student = student;
      });
    });
  }

}
