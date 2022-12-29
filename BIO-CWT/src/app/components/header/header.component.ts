import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ RequestService ]

})
export class HeaderComponent implements OnInit {

  private url:string =  environment.home.getnavlinks 
  public date:any
  constructor(public request: RequestService) { }


  
  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data      
    });
  }

  otherMethod() {
    return "/login"
  }
}
function isLogined() {
  
}

