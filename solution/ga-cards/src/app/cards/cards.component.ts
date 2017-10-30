import { Component, OnInit } from '@angular/core';

import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: any;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards()
      .subscribe(
        response => this.cards = response.json(),
        err => console.error(err),
        () => console.log('GET /cards complete'));
  }
}
