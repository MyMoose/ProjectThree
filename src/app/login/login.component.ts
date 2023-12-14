import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  isLoggedIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      checkMeOut: [false, Validators.requiredTrue], // Validator for checkbox
    });
  }

  ngOnInit() {
    // this.isLoggedIn = this._loginService.isLoggedIn;
  }

  onSubmit() {
    this._loginService.postLogin(true);
    window.alert('You have been logged in.');
  }
}
