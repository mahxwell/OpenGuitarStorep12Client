import {Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Guitar} from '../models/Guitar.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  guitars: Guitar[] = [];
  guitarSubject = new Subject<any[]>();

  private welcomeUrl = 'http://localhost:9005';

  constructor(private http: HttpClient,
              private router: Router) {

    this.http.get<Guitar[]>(this.welcomeUrl + '/welcomeorder')
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

  ngOnInit(): void {
  }

  emitGuitar() {
    this.guitarSubject.next(this.guitars.slice());
  }

  onViewGuitar(id: number) {
    this.router.navigate(['guitars/', id]);
  }

}
