import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {Review} from '../models/Review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewUrl = 'http://localhost:9007/';
 // public guitarAverageMark: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  reviews: Review[] = [];
  reviewSubject = new Subject<any[]>();
  average: number;

  constructor(private http: HttpClient) {
  }

  emitReview() {
    this.reviewSubject.next(this.reviews.slice());
  }

  getReviewsByGuitarId(guitaridguitar: number) {
    this.http.get<Review[]>(this.reviewUrl + 'reviews/' + guitaridguitar)
      .subscribe(
        (response) => {
          this.reviews = response;
          this.emitReview();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  addReview(review: Review) {
    this.http
      .post(this.reviewUrl + 'addreview/', review)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

/*  getReviewAv(guitarid: number) {
    this.http.get<number>(this.reviewUrl + 'reviews/average/' + guitarid)
      .subscribe(
        (response) => {
          this.average = response;
          this.guitarAverageMark.next(this.average);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }*/
}
