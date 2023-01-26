import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/service/request.service';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';



@Component({
  selector: 'app-courser',
  templateUrl: './courser.component.html',
  styleUrls: ['./courser.component.css'],
  providers:[ RequestService ]
})
export class CourserComponent implements OnInit {
  public date:any
  private url:string =  environment.home.getcourser
  public formbool: boolean = false
  public Form: any;
  public img: string = ""
  public imgobj: any

  constructor(public request: RequestService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((data) => {
      this.date = data
    });

    this.Form = this.fb.group( {
      formimage : ["", Validators.compose(
        [Validators.required])]
    });
  }

  save() {

    this.img = this.Form.value.formimage.slice(12, this.Form.value.formimage.length)
    this.imgobj = {
      "image": 'assets/images/' + this.img
    }
    this.request.postData(this.url, this.imgobj).subscribe((date) => {
      location.reload()
    })
  }

  deleteitem(id:string) {
    this.request.deleteData(`${this.url}/${id}`).subscribe((data) => {
      location.reload()
    })
  }

  postDate() {
    this.formbool = true
  }
}
