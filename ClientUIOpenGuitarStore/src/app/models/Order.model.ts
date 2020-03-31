export class Order {
  orderid: number;
  orderdate: string;
  orderdeliverydate: string;
  guitarneme: string;
  guitaridguitar: number;
  costumeridcostumer: number;
  guitarmodelidguitarmodel: number;


  constructor(orderid: number,
              orderdate: string,
              orderdeliverydate: string,
              guitarneme: string,
              guitaridguitar: number,
              costumeridcostumer: number,
              guitarmodelidguitarmodel: number) {
    this.orderid = orderid;
    this.orderdate = orderdate;
    this.orderdeliverydate = orderdeliverydate;
    this.guitarneme = guitarneme;
    this.guitaridguitar = guitaridguitar;
    this.costumeridcostumer = costumeridcostumer;
    this.guitarmodelidguitarmodel = guitarmodelidguitarmodel;
  }
}
