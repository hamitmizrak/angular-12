import { Posts } from './Posts';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-api-angular',
  templateUrl: './api-angular.component.html',
  styleUrls: ['./api-angular.component.css']
})
export class ApiAngularComponent implements OnInit {

  veriler:Posts[]=[];
  get:string="http://localhost:3000/posts";

  //HttpClient birimi bir servicestir.
  constructor(private http:HttpClient) { } 

  ngOnInit(): void {
    //observable: veri üretir
    //observer:veri tüketir
    //subscribe=abone olur 
    this.http.get<Posts[]>(this.get).subscribe(data=>{
    this.veriler=data;
    });
  }

}
