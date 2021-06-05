import { Component, OnInit } from '@angular/core';
declare let alertify:any; //alertify declare

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  adi44="Hamit44";
  constructor() { }

//alertify
  success(){
  alertify.success("başarılı");
  }

  warning(){
    alertify.warning("dikkat");
    }

 message(){
      alertify.message("message alanı");
      }

  error(){
    alertify.error("hata");
    }

  ngOnInit(): void {
  }

}
