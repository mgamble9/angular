import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';

  quotes = [
    {body: 'The good thing about science is that it\'s true whether or not you believe in it.',
      author: 'Neil deGrasse Tyson', rating: 25},
    {body: 'Theology is ignorance with wings.',
      author: 'Sam Harris', rating: 20},
    {body: 'If you want to make an apple pie from scratch, you must first create the universe.',
      author: 'Carl Sagan', rating: 30},
  ];

  createQuote(quote) {
    console.log(quote);
    this.quotes.push(quote);
  }

  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}
