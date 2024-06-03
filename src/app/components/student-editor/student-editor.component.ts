import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { Student } from '../../models/student';
import { BaseServiceService } from '../../service/base-service.service';

@Component({
  selector: 'app-student-editor',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './student-editor.component.html',
  styleUrl: './student-editor.component.css'
})
export class StudentEditorComponent implements OnInit{
  editingStudent: Student;

  constructor(private baseService: BaseServiceService){
    this.editingStudent = new Student();
  }

  ngOnInit(): void {}

  addStudent(): void {
    this.baseService.addNewStudent(this.editingStudent);
    this.editingStudent = new Student();
  }
}
