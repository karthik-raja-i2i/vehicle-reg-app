import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../vehicles';
import { makers } from '../manufacturers';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  manufacturers = makers;
  vehicleInfo: any = {};
  documents = [{ id: 1, name: 'Driving Liscence' }, { id: 2, name: 'PAN card' }, { id: 3, name: 'Passport' }, { id: 4, name: 'Voter Id' }];
  currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
  }

  getDetails() {
    return JSON.stringify(this.vehicleInfo);
  }
}
