import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    LandingPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
