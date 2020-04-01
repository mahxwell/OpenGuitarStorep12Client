export class Reservation {

  reservationid: number;
  guitarbrand: string;
  guitarname: string;
  guitarimageurl: string;
  deliverydate: string;
  costumeridcostumer: number;
  guitaridguitar: number;


  constructor(reservationid: number,
              guitarbrand: string,
              guitarname: string,
              guitarimageurl: string,
              deliverydate: string,
              costumeridcostumer: number,
              guitaridguitar: number) {
    this.reservationid = reservationid;
    this.guitarbrand = guitarbrand;
    this.guitarname = guitarname;
    this.guitarimageurl = guitarimageurl;
    this.deliverydate = deliverydate;
    this.costumeridcostumer = costumeridcostumer;
    this.guitaridguitar = guitaridguitar;
  }
}
