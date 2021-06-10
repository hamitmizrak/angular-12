import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; //observable eklendi
declare let alertify:any;


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
observableData:string="Observable";
observerData:string="Obserer";
  constructor() { }

  ngOnInit(): void {
    //const observable=new Observable(function name(){});
    //const observable=new Observable(value=>{
     // value.next("Hamit");
     // value.next("Mızrak");
     // value.complete();
   // }).subscribe(result5=>console.log(result5));
  //}).subscribe(result5=>alertify.error(result5));

  }

  //1-)observable
  observableFunction(){
const observable=new Observable<string>(
data=>{
  data.next("Malatya");
  data.next("Diyarbakır");
  data.next("Kayseri");
  data.complete();
}).subscribe(dataResult=>alertify.success(dataResult));
  }

  //2-)observer
  observerFunction(){
    const observable=new Observable<number>(
      data=>{
        data.next(40);
        data.next(50);
        data.next(44);
        data.complete();
      }
    );

    const observer=function(value:any){
      alertify.success(value);
      console.log(value);
    }
    observable.subscribe(observer);
  }




}
