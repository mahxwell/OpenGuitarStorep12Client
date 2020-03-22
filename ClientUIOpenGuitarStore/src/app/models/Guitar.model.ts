export class Guitar {

  guitarid: number;
  guitarname: string;
  guitardescription: string;
  guitaryear: string;
  guitarprice: number;
  guitarstatus: boolean;
  imageidimage: number;
  manufactureridmanufacturer: number;
  stock: string;


  constructor(guitarid: number,
              guitarname: string,
              guitardescription: string,
              guitaryear: string,
              guitarprice: number,
              guitarstatus: boolean,
              imageidimage: number,
              manufactureridmanufacturer: number, stock: string) {
    this.guitarid = guitarid;
    this.guitarname = guitarname;
    this.guitardescription = guitardescription;
    this.guitaryear = guitaryear;
    this.guitarprice = guitarprice;
    this.guitarstatus = guitarstatus;
    this.imageidimage = imageidimage;
    this.manufactureridmanufacturer = manufactureridmanufacturer;
    this.stock = stock;
  }
}
