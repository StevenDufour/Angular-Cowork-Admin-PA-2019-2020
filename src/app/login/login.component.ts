import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorEmail = null;
    this.errorPassword = null;
    this.errorLogin = Object.keys(this.login.controls).some(input => this.login.get(input).invalid);

    const formData = this.login.getRawValue();
    const jsonForm = JSON.stringify(formData);

    if (this.isValid()) {
      this.errorLogin = false;
    }
  }

  isValid(): boolean {
    if (this.errorLogin === false) {
      return true;
    }
  }

}
