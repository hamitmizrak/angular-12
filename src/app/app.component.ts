import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //inline html  ==> templateUrl: `<p>inline Html</p>`,
  templateUrl: './app.component.html',

  //inline css  ==> styles: ['h1 { font-weight: normal; }']
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //sabit değişkenler
  adi='Hamit';
  soyadi="Mızrak";
}
