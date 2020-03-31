import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User.model';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userUrl = 'http://localhost:9003/';

  public userPseudo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,
              private router: Router) {
  }

  addUser(user: User) {
    this.http
      .post(this.userUrl + 'add/', user)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  updateUser(userToModify: User) {
    this.http
      .put(this.userUrl + 'update/', userToModify)
      .subscribe(
        () => {
          console.log('Maj terminée !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    sessionStorage.removeItem(('id'));
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('pseudo');
    this.router.navigate(['welcome']);
  }

  deleteUser() {
    const id = sessionStorage.getItem('id');
    this.http
      .delete(this.userUrl + 'user/delete/' + id)
      .subscribe(
        () => {
          console.log('Delete terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }

  authentication(mail: string, password: string) {
    return this.http.get(this.userUrl + 'get/' + mail + '/' + password)
      .subscribe(
        (user: User) => {
          sessionStorage.setItem('id', String(user.id));
          sessionStorage.setItem('mail', user.mail);
          sessionStorage.setItem('pseudo', user.pseudo);

          this.isUserLoggedIn.next(true);
          const test = sessionStorage.getItem('pseudo');
          this.userPseudo.next(test);
        },
        (error) => {
          window.alert('mail ou mot de passe incorrecte');
          this.router.navigate(['']);
        }
      );
  }

  logOut() {
    sessionStorage.removeItem(('id'));
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('pseudo');
    this.router.navigate(['welcome']);
  }
}
