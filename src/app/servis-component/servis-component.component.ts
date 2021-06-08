import { LocalServisService } from './local-servis.service'; //local import
import { ServicesService } from './services.service'; //global servis
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-servis-component',
  templateUrl: './servis-component.component.html',
  styleUrls: ['./servis-component.component.css'],
  providers:[LocalServisService] //local providers
})
export class ServisComponentComponent implements OnInit {
//global ve local instance
  constructor(private servisler:ServicesService, private local:LocalServisService ) { }

  ngOnInit(): void {
  }

  //Global servisler
  toplam2(){
    alert("toplama: "+this.servisler.toplama(5,10));
  }

  cikarma2(){
    alert("toplama: "+this.servisler.cikarma(5,10));
  }

  bolme2(){
    alert("toplama: "+this.servisler.bolme(5,10));
  }

  carpma2(){
    alert("toplama: "+this.servisler.carpma(5,10));
  }

  //localServisler
  toplamLocale(){
    alert("toplama: "+this.local.toplamaLocal(5,10));
  }
}
