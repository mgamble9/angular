import { Component } from '@angular/core';

let colors_array = ["red", "orange", "yellow", "green", "blue", "purple" ];
let div_array: string[];
let div_array_length: number = 10;
// for (let i of div_array){
//   div_array[i] = colors_array[Math.floor(Math.random()*6)];
//   console.log(div_array[i]);
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  // div_array_submit= div_array;

  imageArray = [];

  // fillImageArray() {
  //   for (let y = 0; y < 10; y++) {
  //     const randNum = (Math.floor(Math.random() * 6) ) + 1;
  //     if (randNum === 1) {
  //       this.imageArray.push('DarkSeaGreen ');
  //     } else if (randNum === 2) {
  //       this.imageArray.push('MediumBlue ');
  //     } else if (randNum === 3) {
  //       this.imageArray.push('MediumAquaMarine ');
  //     } else if (randNum === 4) {
  //       this.imageArray.push('DarkBlue ');
  //     } else if (randNum === 5) {
  //       this.imageArray.push('CadetBlue ');
  //     } else if (randNum === 6) {
  //       this.imageArray.push('Chartreuse');
  //     } else if (randNum === 7) {
  //       this.imageArray.push('IndianRed');
  //     }
  //   }
  // }
  fillImageArray() {
    // let colors_array = ["red", "orange", "yellow", "green", "blue", "purple" ];
    // let div_array: string[];
    // let div_array_length: number = 10;

    for (let i =0; i<div_array_length; i++){
      this.imageArray[i] = colors_array[Math.floor(Math.random()*6)];
    }
  }

  ngOnInit() {
    this.fillImageArray();
  }

}
