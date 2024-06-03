import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/student-editor/login-form/login-form.component';
import { MaterialTableStudentsComponent } from './components/material-table-students/material-table-students.component';

export const routes: Routes = [
  {path:'', redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginFormComponent},
  {path:"students",component:MaterialTableStudentsComponent},
  { path: '**', redirectTo: '/login' }
];
