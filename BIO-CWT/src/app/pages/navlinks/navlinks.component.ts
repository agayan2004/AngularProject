import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/service/request.service';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.css'],
  providers:[ RequestService ]
})
export class NavlinksComponent implements OnInit {

  public formbool: boolean = false
  public Form: any
  date: any;
  private url:string =  environment.home.getnavlinks 
  public id: number | undefined
  private addbool: boolean | undefined

  constructor(public request: RequestService,  public fb: FormBuilder) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data      
    })

    this.Form = this.fb.group( {
      itemname : ["", Validators.compose(
        [Validators.required])],
      itemlink: ["", Validators.compose(
        [Validators.required])]
    });
  }

  chengeItem(el:any) {
    this.formbool = true
    this.id = el.id

    this.Form.setValue({
      "itemname":  el.itemname,
      "itemlink": el.itemlink
    })
  }

  deleteItem(el:any) {
    this.request.deleteData(`${this.url}/${el}`).subscribe((data) => {
      location.reload()
    })
  }

 save () {
      if (this.addbool) {
        this.request.postData(this.url, this.Form.value).subscribe((res) => {
          location.reload()
        })        
      } else {
        this.request.putData(`${this.url}/${this.id}`, this.Form.value).subscribe((res) => {
          location.reload()
        })
      }
      this.formbool = false
      this.Form.setValue({
        "itemname":  "",
        "itemlink": ""
      })
  }

  postData() {
    this.addbool = true
    this.formbool = true
  }
}
