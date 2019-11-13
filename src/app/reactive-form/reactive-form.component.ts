import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { makers } from '../manufacturers';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  manufacturers = makers;
  documents = [{ id: 1, name: 'Driving Liscence' }, { id: 2, name: 'PAN card' }, { id: 3, name: 'Passport' }, { id: 4, name: 'Voter Id' }];
  vehicleInfo: any = {};
  vehicleForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.vehicleForm = this.formBuilder.group({
      maker: ['', Validators.required],
      model: ['', Validators.required],
      isInsured: ['Yes'],
      details: [''],
      docs: [''],
      regDate: [''],
      info: new FormArray([])
    });

    this.addCheckboxes();
  }

  ngOnInit() {
  }

  addCheckboxes() {
    this.documents.forEach(doc => {
      const option = new FormControl();
      (this.vehicleForm.controls.info as FormArray).push(option);
    });
  }

  getDetails() {
    console.log("hola")
    return (JSON.stringify(this.vehicleForm.value));
  }

}
