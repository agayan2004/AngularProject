import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';

@Component({
  selector: 'app-work-with',
  templateUrl: './work-with.component.html',
  styleUrls: ['./work-with.component.css'],
  providers:[ RequestService ]
})
export class WorkWithComponent implements OnInit {

  public date:any
  private url:string =  environment.home.getworkwith 

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data
    });
  }

}
