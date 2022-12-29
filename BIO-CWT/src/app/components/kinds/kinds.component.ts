import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';

@Component({
  selector: 'app-kinds',
  templateUrl: './kinds.component.html',
  styleUrls: ['./kinds.component.css'],
  providers:[ RequestService ]
})
export class KindsComponent implements OnInit {

  public date:any
  private url:string =  environment.home.getworkwith 

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data
    });
  }


}
