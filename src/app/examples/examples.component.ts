import { Component, OnInit } from '@angular/core';

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

}
