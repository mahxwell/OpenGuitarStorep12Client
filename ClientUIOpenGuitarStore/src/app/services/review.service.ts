import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Review} from '../models/Review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

   private reviewUrl = 'http://localhost:9007/';
  reviews: Review[] = [];
  reviewSubject = new Subject<any[]>();

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

  getReviews() {
    this.http.get<Review[]>(this.reviewUrl + 'findall')
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
}
