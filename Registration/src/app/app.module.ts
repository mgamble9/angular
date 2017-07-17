import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyRegistrationComponent } from './my-registration/my-registration.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component'; // <-- Import HttpModule

@NgModule({
  declarations: [
    AppComponent,
    MyRegistrationComponent,
    UserComponent
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
