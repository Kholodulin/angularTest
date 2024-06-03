import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseServiceService {

  private studentsUrl = 'api/base/students';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  findStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.studentsUrl}/${id}`);
  }

  addNewStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student).pipe();
  }
  delExistStudent(id: number): Observable<any> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete(url);
  }
  updExistStudent(id: number, student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    student.id = id;
    return this.http.put<Student>(url, student);
  }
}

