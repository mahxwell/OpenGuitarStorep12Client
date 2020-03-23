import {Component,  OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

import {AuthenticationService} from '../services/authentication.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      mail: '',
      password: '',
    });
  }

  authLog() {
    const mail1 = 'mail';
    const password1 = 'password';
    const formValue = this.signinForm.value;
    this.authenticationService.authentication(formValue[mail1], formValue[password1]);
    this.router.navigate(['welcome']);
  }
}
