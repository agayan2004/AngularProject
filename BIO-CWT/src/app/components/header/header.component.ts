import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ RequestService ]

})
export class HeaderComponent implements OnInit {
  // @Input("test") data: string = ""
  // @Input() name: string = ""
  // @Output("out") out: EventEmitter<any> = new EventEmitter<any>()



  show(e:Event) {// avelacnmenq event orinak child comp* mej vor clicki jamanak sh
    console.log(e); 
  }
  
  private url:string =  environment.home.getnavlinks 
  public date:any
  constructor(public request: RequestService) { }


  
  ngOnInit(): void {
    // console.log(this.data);
    
    this.request.getData(this.url).subscribe((data) => {
      this.date = data      
    });
    
    // this.out.emit()
  }
  
}

