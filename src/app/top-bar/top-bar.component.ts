import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private _loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this._loginService.isLoggedInObservable.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  logout() {
    this._loginService.postLogOut(false);
    // Navigate to the home route after logging out
    this.router.navigate(['/']);
    window.alert('You have been logged out.');
  }
}

