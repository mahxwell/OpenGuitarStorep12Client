import {Injectable} from '@angular/core';
import {Guitar} from '../models/Guitar.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

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
    return this.http.get(this.guitarUrl + '/guitars/' + id);
  }
}
