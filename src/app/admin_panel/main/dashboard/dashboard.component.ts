import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "")
  constructor(private router: Router) {
    if (!this.loggedIn) {
      this.router.navigateByUrl("/notFound");
    }
  }
}
