import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationUrl = 'http://localhost:9008/';

  constructor(private http: HttpClient) {
  }

  addReservation(guitarid: number, userid: number) {
    this.http
      .post(this.reservationUrl + 'reservations/add/' + String(guitarid) + '/' + String(userid), null)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteReservation(reservationid: number) {
    this.http
      .delete(this.reservationUrl + 'reservations/delete/' + String(reservationid))
      .subscribe(
        () => {
          console.log('Delete terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
