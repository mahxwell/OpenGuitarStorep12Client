import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ReviewService} from '../../services/review.service';
import {Router} from '@angular/router';
import {Review} from '../../models/Review.model';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  reviewForm: FormGroup;
  date: Date;

  constructor(private formBuilder: FormBuilder,
              private reviewService: ReviewService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.reviewForm = this.formBuilder.group({
      reviewcomment: '',
      reviewnote: ''
    });
  }

  saveReview() {
    this.date = new Date();
    const formValue = this.reviewForm.value;
    const reviewdate = this.date.toDateString();
    const reviewcomment = 'reviewcomment';
    const reviewnote = 'reviewnote';

    const reviewcostumername = sessionStorage.getItem('pseudo');
    const guitaridguitar = Number(sessionStorage.getItem('guitarid'));
    const costumeridcostumer = Number(sessionStorage.getItem('id'));

    const newReview = new Review(
      reviewdate,
      formValue[reviewcomment],
      formValue[reviewnote],
      reviewcostumername,
      guitaridguitar,
      costumeridcostumer
    );

    this.reviewService.addReview(newReview);
    this.router.navigate(['/welcome']);
  }
}
