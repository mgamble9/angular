import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  @Input() power;

  constructor() { }

  ngOnInit() {
      this.power = this.power *10;
  }

  // ngOnChanges() {
  //   this.power = this.power * 10;
  // }

}
