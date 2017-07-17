import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TzComponentComponent } from './tz-component/tz-component.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

@NgModule({
  declarations: [
    AppComponent,
    TzComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
