import { BrowserModule } from '@angular/platform-browser';
import { InitModule } from '../angular/init';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import {LoginService} from './login.service';
import {ErrorMessagesComponent} from "./error-msg.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorMessagesComponent
  ],
  imports: [
    BrowserModule,
    InitModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
