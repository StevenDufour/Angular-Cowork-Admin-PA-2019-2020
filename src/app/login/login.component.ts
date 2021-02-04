import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  errorLogin = false;
  errorEmail: string;
  errorPassword: string;
  loginError: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginError = '';
    this.errorEmail = null;
    this.errorPassword = null;
    this.errorLogin = Object.keys(this.login.controls).some(input => this.login.get(input).invalid);

    const formData = this.login.getRawValue();
    const jsonForm = JSON.stringify(formData);

    const email = this.login.controls.email.value;
    /*if (EmailValidator.validate(email) === false) {
      this.errorEmail = 'Votre email n\'est pas valide.';
    }*/

    const password = this.login.controls.password.value;
    /*if (regExp.test(password) === false) {
      this.errorPassword = 'Votre password doit contenir minimum 8 caractères, une lettre majuscule, une lettre minuscule et un nombre.';
    }*/

    if (this.isValid()) {
      this.errorLogin = false;


      /*this.authService.login(formData).subscribe( value => {
          if (localStorage.getItem('authorization') != null) {
            localStorage.clear();
          }
          localStorage.setItem('authorization', 'Bearer ' + value.Sessions[0].token);
        },
        error => this.loginError = 'Error ' + error.status + ': ' + error.statusText,
        complete => this.router.navigate(['home']));*/
    }
  }

  isValid(): boolean {
    if (this.errorLogin === false){
      return true;
    }
  }

}
