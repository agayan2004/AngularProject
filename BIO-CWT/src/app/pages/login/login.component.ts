import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/service/request.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ RequestService ]
})
export class LoginComponent implements OnInit {
  Form: any;
  url:string = 'https://reqres.in/api/login'
  admtoken:any

  constructor(public fb: FormBuilder,public request: RequestService) { }

  ngOnInit(): void {
    this.Form = this.fb.group( {
      email: ["", Validators.compose(
        [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password:["", Validators.compose(
        [Validators.required,Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)])],
    });
  }
login(value: any) {

  this.request.postData(this.url, value).subscribe((data:object) => {
    this.admtoken = data
    localStorage.setItem('token', this.admtoken.token)
  });
}
  
  save() {
    this.login(this.Form.value)        
  }

}
