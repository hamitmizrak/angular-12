import { Injectable } from '@angular/core';

@Injectable()
export class LocalServisService {

  constructor() { }

    //toplama
    toplamaLocal(value1:number,value2:number):number{
      return value1+value2;
    }
     //cikarma
     cikarmaLocal(value1:number,value2:number):number{
      return value1-value2;
    }
     //carpma
     carpmaLocal(value1:number,value2:number):number{
      return value1*value2;
    }
     //bolme
     bolmeLocal(value1:number,value2:number):number{
      return value1/value2;
    }
}
