import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {


  inputdegiskeni:string="default";

  //custom pipe
  forTextData:string="";
  dizi:any[]=["Hamit","Mızrak","Malatya"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
