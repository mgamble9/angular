import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ApiService } from './api.service'; // add this to import service

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService], // add this to dependencies
  bootstrap: [AppComponent]
})
export class AppModule { }
