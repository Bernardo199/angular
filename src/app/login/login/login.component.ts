import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() formControld: FormControl = new FormControl;
  constructor() { 
  }

  ngOnInit(): void {
  }
  logo : string = '/assets/logo_emel.png';
  email = new FormControl('', [Validators.required, Validators.email]);
   
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Email invaido' : '';
  }
}
