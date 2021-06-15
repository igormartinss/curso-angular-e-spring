import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  successMessage: string;
  errorMessages: string[];
  registering: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService
            .login(this.username, this.password)
            .subscribe(response => {
              const accessToken = JSON.stringify(response);
              localStorage.setItem('access_token', accessToken);
              this.router.navigate(['/home']);
            }, errorResponse => {
              this.errorMessages = ['Usuário e/ou senha incrretos'];
            })
  }

  prepareRegiter(event: Event) {
    event.preventDefault();
    this.registering = !this.registering;
  }

  register() {
    const user: User = new User();
    user.username = this.username;
    user.password = this.password;

    this.authService.saveUser(user).subscribe(response => {
      this.successMessage = "Cadastrado com sucesso!";
      this.registering = false;
      this.errorMessages = null;
      this.username = "";
      this.password = "";
    }, errorResponse => {
      this.errorMessages = errorResponse.error.errors;
      this.successMessage = null;
    });
  }
}
