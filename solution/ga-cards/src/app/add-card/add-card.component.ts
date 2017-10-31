import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Card } from '../card/card.type';
import { CardService } from '../card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  card: Card;
  question: string;

  constructor(private cardService: CardService, private router: Router) { }

  handleSubmit(form: NgForm) {
    this.card = form.value.card;

    if (!this.card.question) {
      // @TODO Report error in the UI
      return;
    }

    this.cardService.addCard(this.card)
      .subscribe(
        card => console.log('Card saved:', card),
        err => console.error(err),
        () => this.router.navigateByUrl('/cards'));
  }

  ngOnInit() { }
}
