import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../../service/auth-service.service';
import { CommonModule } from '@angular/common';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,

  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthServiceService, private router:Router) {
      this.username = '';
      this.password = '';
     }

  ngOnInit() {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(["/students"])
      },
      error: (error) => {
        console.error('Ошибка авторизации:', error);
      }
    });
  }
}
