import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';

@Component({
  selector: 'app-about-block',
  templateUrl: './about-block.component.html',
  styleUrls: ['./about-block.component.css'],
  providers:[ RequestService ]
})
export class AboutBlockComponent implements OnInit {

  public date:any
  private url:string =  environment.home.getaboutus

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data
    });
  }

}
