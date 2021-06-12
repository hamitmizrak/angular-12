import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//one-way binding
requiredName:string="adınızı girmediniz";
requiredEmail:string="emailini girmediniz";
requiredPassword:string="şifrenizi girmediniz";
  constructor() { }

  ngOnInit(): void {
  }

}
