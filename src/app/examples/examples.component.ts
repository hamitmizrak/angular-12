import { Component, OnInit } from '@angular/core';
declare let alertify:any;

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  productResult:string="ürün yoktur";

  //ngIf
sayi66:number=80;
sayi77:any=50;

//ngFor
//computer:string[]=[];
computer:string[]=["msi","monster","lenova","Samsung"];

  constructor() { }

  ngOnInit(): void {
  }

  click1(){
    console.log("Tıklandı-1");
    alert("Tıklandı-1")
  }

  click2(){
    alert("Tıklandı-2")
  }

  click3(){
alertify.success("Başarılı");
  }

  click4(){
    alertify.warning("Tehlike");
  }

  click5(){
    alertify.error("Hata");
  }

  data(event:any){
alertify.success(event.toElement.value);
  }

}
