import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService} from '../student.service';

@Component({
  selector: 'app-win-lose-page',
  templateUrl: './win-lose-page.component.html',
  styleUrls: ['./win-lose-page.component.scss']
})
export class WinLosePageComponent implements OnInit {

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }
  mean: number;
  students: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.mean = +params['mean'];
    });

    this.studentService.getStudents().subscribe((students: any) => {
      this.students = students;
    });

  }

}
