import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public Form: any

  constructor( public fb: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.fb.group( {
      name : ["", Validators.compose(
        [Validators.required,  Validators.maxLength(3), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/)])],
      phone: ["", Validators.compose(
        [Validators.required,  Validators.maxLength(6), Validators.maxLength(15), Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)])],
      question: ["", Validators.compose(
        [Validators.required])]
    });
    
  }


  save () {
    console.log(this.Form);
  }
}
