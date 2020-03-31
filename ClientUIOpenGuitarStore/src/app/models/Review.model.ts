export class Review {
  reviewdate: string;
  reviewcomment: string;
  reviewnote: number;
  reviewcostumername: string;
  guitaridguitar: number;
  costumeridcostumer: number;


  constructor(reviewdate: string,
              reviewcomment: string,
              reviewnote: number,
              reviewcostumername: string,
              guitaridguitar: number,
              costumeridcostumer: number) {
    this.reviewdate = reviewdate;
    this.reviewcomment = reviewcomment;
    this.reviewnote = reviewnote;
    this.reviewcostumername = reviewcostumername;
    this.guitaridguitar = guitaridguitar;
    this.costumeridcostumer = costumeridcostumer;
  }


}
