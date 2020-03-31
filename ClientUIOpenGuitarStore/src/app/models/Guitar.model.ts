export class Guitar {

    guitarid: number;
    guitarname: string;
    guitarbrand: string;
    guitardescription: string;
    guitaryear: string;
    guitarprice: number;
    guitarstatus: boolean;
    guitarimageurl: string;
    manufactureridmanufacturer: number;
    stock: string;


    constructor(guitarid: number,
                guitarname: string,
                guitarbrand: string,
                guitardescription: string,
                guitaryear: string,
                guitarprice: number,
                guitarstatus: boolean,
                guitarimageurl: string,
                manufactureridmanufacturer: number,
                stock: string) {
        this.guitarid = guitarid;
        this.guitarname = guitarname;
        this.guitarbrand = guitarbrand;
        this.guitardescription = guitardescription;
        this.guitaryear = guitaryear;
        this.guitarprice = guitarprice;
        this.guitarstatus = guitarstatus;
        this.guitarimageurl = guitarimageurl;
        this.manufactureridmanufacturer = manufactureridmanufacturer;
        this.stock = stock;
    }
}
