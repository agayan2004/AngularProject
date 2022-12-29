import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';




@Component({
  selector: 'app-karusel',
  templateUrl: './karusel.component.html',
  styleUrls: ['./karusel.component.css'],
  providers:[ RequestService ]
})
export class KaruselComponent implements OnInit {

  public date:any
  private url:string =  environment.home.getcourser

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data
    });
  }

}

