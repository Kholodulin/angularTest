import { Component, importProvidersFrom } from '@angular/core';
import { StudentEditorComponent } from "./components/student-editor/student-editor.component";
import { MaterialTableStudentsComponent } from "./components/material-table-students/material-table-students.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        StudentEditorComponent,
        MaterialTableStudentsComponent,
        RouterOutlet
    ]
})

export class AppComponent {
  title = 'AngApp';
}
