import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from './register';

declare let alertify: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //one-way binding
  requiredName: string = 'adınızı girmediniz';
  requiredEmail: string = 'emailini girmediniz';
  requiredPassword: string = 'şifrenizi girmediniz';

  //instance
  register44: Register = new Register();

  registerAddForm(form: NgForm) {
    alertify.success(form.value.adi);
    alertify.success(form.value.email);
    alertify.error(form.value.password);
    console.log(form.value.adi);
  }

  constructor() {}

  ngOnInit(): void {}
}
