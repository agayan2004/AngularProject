import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers:[ RequestService ]
})
export class QuestionsComponent implements OnInit {

  date: any;
  private url:string =  environment.home.getquestion 

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data      
    })
  }

}
