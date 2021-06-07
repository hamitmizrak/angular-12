import { Component, OnInit } from '@angular/core';
declare let alertify:any;

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {

  //1-)string interpolation
  adi:string="string interpolation binding";

  //2-)property binding"
  htmlContent:string="property binding";

  //3-)event binding"
  ekle(){
    alert("eklendi");
  }
  ekle2(){
    alert("eklendi");
  }

  ekle3(){
    alert("eklendi");
  }

  ekle4(){
    alert("eklendi");
    alertify.success("ekleme başarılı");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
