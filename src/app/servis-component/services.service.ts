import { Injectable } from '@angular/core';

//global 
@Injectable({
  providedIn: 'root'
})

//local
//@Injectable()

export class ServicesService {

  constructor() { }

  //toplama
  toplama(value1:number,value2:number):number{
    return value1+value2;
  }
   //cikarma
   cikarma(value1:number,value2:number):number{
    return value1-value2;
  }
   //carpma
   carpma(value1:number,value2:number):number{
    return value1*value2;
  }
   //bolme
   bolme(value1:number,value2:number):number{
    return value1/value2;
  }
}
