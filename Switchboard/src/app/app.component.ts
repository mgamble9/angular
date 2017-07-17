import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  button_array: boolean[] = [true,true,true,true,true,true,true,true,true,true];

  toggleButton(idx) {
    this.button_array[idx] = !this.button_array[idx];
  }
}
