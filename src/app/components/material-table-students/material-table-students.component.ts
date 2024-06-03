import { AuthServiceService } from './../../service/auth-service.service';
import { MatDividerModule } from '@angular/material/divider';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../models/student';
import { BaseServiceService } from '../../service/base-service.service';
import { DialogAddWrapperComponent } from '../student-editor/dialog-add-wrapper/dialog-add-wrapper.component';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-table-students',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './material-table-students.component.html',
  styleUrls: ['./material-table-students.component.css'],
})
export class MaterialTableStudentsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'fio', 'group','phoneNumber', 'actions'];
  dataSource: MatTableDataSource<Student>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private baseService: BaseServiceService, private authService: AuthServiceService,
    public dialog: MatDialog, private router:Router) {
      this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    console.log("TableStudentsComponent");
    this.baseService.getAllStudents().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addNewStudent() {
    const dialogAddingNewStudent = this.dialog.open(DialogAddWrapperComponent, {
      width: '400px',
      data: null
    });
    dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
      if (result != null) {
        console.log("adding new student: " + result.fio);
        this.baseService.addNewStudent(result).subscribe(() => {
          this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data);
        });
      }
    });
  }

  deleteStudent(id: number): void {
    this.baseService.delExistStudent(id).subscribe(() => {
      this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data);
    });
  }

  updateStudent(id: number) {
    this.baseService.findStudentById(id).subscribe((student: Student) => {
      const dialogEditingStudent = this.dialog.open(DialogEditWrapperComponent, {
        width: '400px',
        data: student,
      });

      dialogEditingStudent.afterClosed().subscribe((result: Student) => {
        if (result != null) {
          console.log("Edited student: " + result.fio);
          this.baseService.updExistStudent(id, result).subscribe(() => {
            this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data);
          });
        }
      });
    });
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: (response) => {
        console.log( response);
        this.router.navigate(["/login"])
      },
      error: (error) => {
        console.error('Ошибка выхода:', error);
      }
    });
  }
}
