import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/controllers/users.service';
import { users } from 'src/app/models/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  signIn: boolean = true;
  signUp: boolean = false;
  user = new users();
  loginUser = new users();
  user_id!: any;
  loggedIn!: boolean;

  userToShow = new users();
  constructor(private userApi: UsersService, private router: Router) {
    this.user.isAdmin = false;
    this.checkLogin();
    if (this.loggedIn) {
      this.userApi.getById(this.user_id).subscribe((res: any) => {
        this.userToShow = res;
      })
    }
  }

  signInBtn() {
    this.signIn = true;
    this.signUp = false;
  }

  signUpBtn() {
    this.signUp = true;
    this.signIn = false;
  }

  signUpFn() {
    this.userApi.post(this.user).subscribe((res: any) => { })
  }

  signInFn() {
    this.userApi.get().subscribe((data: any) => {
      let user = data.find((result: any) => {
        if (result.email === this.loginUser.email && result.password === this.loginUser.password) {
          this.user_id = result.id;
          return true;
        } else {
          return false;
        }
      });
      if (user) {
        if (user.isAdmin) {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("user_id", this.user_id);
          localStorage.setItem("isAdmin", "true");
          this.router.navigateByUrl('/admin');
        } else {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("user_id", this.user_id);
          location.reload();
        }
      }
    })
  }

  checkLogin() {
    this.loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "false");
    this.user_id = JSON.parse(localStorage.getItem("user_id") || "0");
  }

  edit(id: any) {
    this.userApi.put(id, this.userToShow).subscribe((res: any) => {
      location.reload();
    })
  }

  logOut() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user_id');
    localStorage.removeItem('isAdmin');
    location.reload();
  }
}
