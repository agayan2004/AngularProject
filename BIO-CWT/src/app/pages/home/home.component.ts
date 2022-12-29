import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ RequestService ]
  
})
export class HomeComponent implements OnInit {

  public date:any
  private url:string =  environment.home.getheaderinfon 
  
  constructor(public request: RequestService) { 
    
  }
  

  ngOnInit(): void {// henc kayq@ amboxchovi zagruzkae exnm me anqamme kanchm tvyal functian
    this.request.getData(this.url).subscribe((data) => {
      this.date = data
      console.log(this.date[0]);
      
    });
  }



  create(): void {
  //   let value = {
        // "firstname": "Mike",
        // "lastname": "Jonson",
        // "email": "exsampl@mail.ru",
        // "phone": "+321 45 34 43",
        // "age": 32
    // }
      // this.request.putData(`${this.url}/1`, value).subscribe((res) => {
      //   console.log(res);
      // })
      // this.request.postData(this.url, value).subscribe((res) => {
      //   console.log(res);
      // })
      // this.request.deleteData(`${this.url}/1`).subscribe((res) => {
      //   console.log(res);
      // })
  // }

  // public isShow: boolean = true
  // toggle ():void {
  //   this.isShow = !this.isShow
  }

}
