import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {
    constructor(private http: HttpClient) {}

    createStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(`http://localhost:8080/students`, student, {withCredentials: true});
    }

    getStudent(i: any): Observable<Student> {
        return this.http.get<Student>(`http://localhost:8080/students/${i}`, {withCredentials: true});
    }

    getStudents(): Observable<any> {
        return this.http.get<any>(`http://localhost:8080/students`, {withCredentials: true});
    }

}