import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-add-wrapper',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
  ],
  templateUrl: './dialog-add-wrapper.component.html',
  styleUrl: './dialog-add-wrapper.component.css'
})

export class DialogAddWrapperComponent {
  editingStudent: Student;

  constructor(public dialogRef: MatDialogRef<DialogAddWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) {
      this.editingStudent = new Student();
    }
    ngOnInit(): void{}

    onNoClick(): void{
      this.dialogRef.close();
    }
}

