import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      name: '',
      surname: '',
      pseudo: '',
      mail: '',
      password: '',
      newsletter: ''
    });
  }

  saveUser() {
    const formValue = this.signupForm.value;
    const name = 'name';
    const surname = 'surname';
    const pseudo = 'pseudo';
    const mail = 'mail';
    const password = 'password';
    const newsletter = 'newsletter';

    const newUser = new User(
      formValue[name],
      formValue[surname],
      formValue[pseudo],
      formValue[mail],
      formValue[password],
      formValue[newsletter]);

    this.authenticationService.addUser(newUser);
    this.router.navigate(['/welcome']);
  }
}
