import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultsComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
