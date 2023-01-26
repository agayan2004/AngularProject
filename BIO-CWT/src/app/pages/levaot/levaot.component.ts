import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levaot',
  templateUrl: './levaot.component.html',
  styleUrls: ['./levaot.component.css']
})
export class LevaotComponent implements OnInit {

  constructor() { }

  ngOnInit():void {
    if (!localStorage.getItem('token')) {
      window.location.href = 'admin_login';
    }
  }

}
