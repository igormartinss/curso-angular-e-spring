import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  userAuthenticated: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userAuthenticated = this.authService.getAuthenticatedUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
