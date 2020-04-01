import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../models/User.model';

@Component({
  selector: 'app-accountmodify',
  templateUrl: './accountmodify.component.html',
  styleUrls: ['./accountmodify.component.css']
})
export class AccountmodifyComponent implements OnInit {

  updateForm: FormGroup;
  newsletterbool: boolean;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {
    this.newsletterbool = false;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.updateForm = this.formBuilder.group({
      name: '',
      surname: '',
      pseudo: '',
      mail: '',
      password: '',
      newsletter: ''
    });
  }

  updateUser() {
    const formValue = this.updateForm.value;
    const id = Number(sessionStorage.getItem('id'));
    const name = 'name';
    const surname = 'surname';
    const pseudo = 'pseudo';
    const mail = 'mail';
    const password = 'password';

    const newUser = new User(
      id,
      formValue[name],
      formValue[surname],
      formValue[pseudo],
      formValue[mail],
      formValue[password],
      this.newsletterbool);

    this.authenticationService.updateUser(newUser);
    sessionStorage.removeItem(('id'));
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('pseudo');
    this.router.navigate(['generalmsg']);
  }

}
