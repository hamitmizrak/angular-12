import { Product } from './Product';
import { Component, OnInit } from '@angular/core';
declare let alertify: any;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  //one-way -binding
  sil: string = 'Sil';
  listeEkle: string = 'Liste Ekle';
  listePlaceHolder: string = 'Listeye ekleme yapma alanı ...';

  //instance object
  product: Product = new Product();

  //instance List
  productDizisi: Product[] = new Array();

  //now Date
  nowDate(): Date {
    return new Date();
  }

  //ekleme butonu
  addList() {
    //alert('Ekleme yapıldı' + this.product.adi);
    this.productDizisi.push({
      adi: this.product.adi,
      durum: this.product.durum,
      tarih: this.nowDate(),
    });
    alertify.success(this.product.adi);
    //alertify.error(this.product.tarih);
    //console.log(this.product.tarih);
    //console.log(this.product);
    //console.log("dizi"+this.productDizisi);
    this.product.adi = '';
  }

  //silme butonu
  deleteList(product: Product) {
    let resultDelete:boolean = confirm('Silmek İstiyor musunuz ?');
    if (resultDelete) {
      let find = this.productDizisi.indexOf(product);
      this.productDizisi.splice(find, 1);
      alertify.error('silindi');
    } else {
      alertify.success('silinmedi');
    }
  }
}
