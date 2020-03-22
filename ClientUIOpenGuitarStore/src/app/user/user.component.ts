import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  userSubscription: Subscription;

  constructor(private userService: UserService) {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUser();
  }

  ngOnInit(): void {
    this.userService.getUser();
  }

  onFetch() {
    this.userService.getUser();
  }
}
