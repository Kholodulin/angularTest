import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-edit-wrapper',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule
  ],
  templateUrl: './dialog-edit-wrapper.component.html',
  styleUrl: './dialog-edit-wrapper.component.css'
})

export class DialogEditWrapperComponent {
  editingStudent: Student;

  constructor(public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) {
      this.editingStudent = data;
      console.log(this.editingStudent.fio);
    }
    ngOnInit(): void{}

    onNoClick(): void{
      this.dialogRef.close();
    }
}
