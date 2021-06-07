import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  adi:string="Servlet JSP jsf Springframework SPRINgBOOt";
  tarih=new Date("1986 02 05");
  pi:number=3.14159265;
  para:number=25;
  yuzde:number=0.123456789;

dizi1:string="Hamit Mızrak";
dizi2=[0,1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
  }

}
