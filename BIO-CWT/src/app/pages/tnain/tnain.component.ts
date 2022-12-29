import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';

@Component({
  selector: 'app-tnain',
  templateUrl: './tnain.component.html',
  styleUrls: ['./tnain.component.css'],
  providers:[ RequestService ]
})


export class TnainComponent implements OnInit {
[x: string]: any;

  public Form: any
  public formbool:boolean = false
  public date:any
  private url:string =  environment.home.getuser 
  public id: any
  private addbool: boolean | undefined

  constructor(public request: RequestService, public fb: FormBuilder) { }

  ngOnInit(): void {

    this.request.getData(this.url).subscribe((data) => {
      this.date = data
    });
    
    this.Form = this.fb.group( {
      firstname : ["", Validators.compose(
        [Validators.required,, Validators.pattern(/^[a-zA-Z ]+$/), Validators.maxLength(3), Validators.maxLength(10)])],
      lastname: ["", Validators.compose(
        [Validators.required,  Validators.pattern(/^[a-zA-Z ]+$/), Validators.maxLength(3), Validators.maxLength(15)])],
      address: ["", Validators.compose(
        [Validators.required,  Validators.pattern(/^[a-zA-Z ]+$/)])],
      gender: ["", Validators.compose(
        [Validators.required,  Validators.pattern(/^[a-zA-Z ]+$/)])],
      email: ["", Validators.compose(
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)])],
      phone: ["", Validators.compose(
        [Validators.required, Validators.pattern(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)])],
      age: ["", Validators.compose(
        [Validators.required, Validators.maxLength(1), Validators.maxLength(3)])],
    });
  }

  deleteitem(item:any){    
    this.request.deleteData(`${this.url}/${item.id}`).subscribe((res) => {
      location.reload()
    })
    this.id = item.id
    }

  setVal(item:any) {
    this.addbool = false
    this.id = item.id
    this.formbool = true
    
    this.Form.setValue({
      "firstname":  item.firstname,
      "lastname": item.lastname,
      "address": item.address,
      "gender": item.gender,
      "email": item.email,
      "phone": item.phone,
      "age": item.age
    })
  }

  disp() {
    this.formbool = false
    this.Form.setValue({
      "firstname":  "",
      "lastname": "",
      "address": '',
      "gender": "",
      "email": "",
      "phone": "",
      "age": ""
    })
  }

  postData() {
    this.addbool = true
    this.formbool = true
  }

  save () {
      if (this.addbool) {
        this.request.postData(this.url, this.Form.value).subscribe((res) => {
          console.log(res);
        })        
      } else {
        this.request.putData(`${this.url}/${this.id}`, this.Form.value).subscribe((res) => {
          location.reload()
        })
      }
      this.formbool = false
      this.Form.setValue({
        "firstname":  "",
        "lastname": "",
        "address": '',
        "gender": "",
        "email": "",
        "phone": "",
        "age": ""
      })
  }
}


