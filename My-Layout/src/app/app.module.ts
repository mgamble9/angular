import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLayoutComponent } from './my-layout/my-layout.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyMainComponent } from './my-main/my-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLayoutComponent,
    MyHeaderComponent,
    MyNavComponent,
    MyMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
