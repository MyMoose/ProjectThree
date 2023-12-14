import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedInObservable = this.isLoggedInSubject.asObservable();

  constructor() {}

  postLogin(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  postLogOut(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  isLoggedIn(): boolean {
    // You can add any additional logic here to determine the actual login status
    return this.isLoggedInSubject.value;
  }
}
