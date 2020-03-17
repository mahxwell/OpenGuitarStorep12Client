import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  private forumUrl = 'http://localhost:9003/findall';
  userSubject = new Subject<any[]>();

  constructor(private http: HttpClient) {
  }

  emitUser() {
    this.userSubject.next(this.users.slice());
  }

  getUser() {

    this.http.get<User[]>(this.forumUrl)
      .subscribe(
        (response) => {
          this.users = response;
          this.emitUser();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
