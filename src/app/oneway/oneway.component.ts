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

  

  constructor() { }

  ngOnInit(): void {
  }

}
