import {Injectable} from '@angular/core';
import {Guitar} from '../models/Guitar.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  public searchGuitars: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  guitars: Guitar[] = [];
  private guitarUrl = 'http://localhost:9002';
  guitarSubject = new Subject<any[]>();

  constructor(private http: HttpClient) {
  }

  emitGuitar() {
    this.guitarSubject.next(this.guitars.slice());
  }

  getGuitars() {
    this.http.get<Guitar[]>(this.guitarUrl + '/guitars')
      .subscribe(
        (response) => {
          this.guitars = response;
          this.emitGuitar();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getOneGuitar(id: number) {
    sessionStorage.setItem('guitarid', String(id));
    return this.http.get(this.guitarUrl + '/guitars/' + id);
  }

  searchGuitar(str: string) {
    this.http.get<Guitar[]>(this.guitarUrl + '/guitars/search/' + str)
      .subscribe(
        (response) => {
          this.guitars = response;
          this.emitGuitar();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    this.searchGuitars.next(this.guitars);
  }
}
