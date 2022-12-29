import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let obs =  new Observable((params) => {
    //   params.next("next")
    //   params.next("next")
    //   params.next("next")
    //   params.complete()
    //   setTimeout(() => {
    //     params.next({"name": "Mike"})
    //     params.error(false)
    //     params.complete()
    //   }, 1500)
    // })
    // obs.subscribe((item: any) => {
    //   console.log(item);
    // }, (error: any) => {
    //   console.log("error");
    // }, () => {
    //   console.log("complate");
      
    // })
    

    
  }

}
