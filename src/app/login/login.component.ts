import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = '';
  submiting = false;

  loginForm : FormGroup;

  constructor(public auth: AuthenticationService, public router: Router, public fb: FormBuilder) {
    this.loginForm = fb.group({
      'username' : ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  ngOnInit() {
    if (this.auth.loggedIn) {
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 250);
    }
  }

  submitForm(data: any):void {
    this.error = '';


    if (this.loginForm.valid) {
      console.log(data);
      this.submiting = true;

      this.auth.login(data.username, data.password).subscribe(
        user => {
          this.submiting = false;
          console.log(user);
          this.router.navigate(['home']);
        },
        error => {
          this.submiting = false;
          this.error = error.message;
          console.log(error);
        }
      );
    }
  }
}
