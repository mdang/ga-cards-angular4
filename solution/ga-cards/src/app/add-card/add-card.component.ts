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

  constructor(private cardService: CardService, private router: Router) { }

  handleSubmit(form: NgForm) {
    console.log('form submitted', form.value);

    this.card = form.value.card;
    this.cardService.addCard(this.card)
      .subscribe(
        response => console.log('Card saved:', response.json()),
        err => console.error(err),
        () => this.router.navigateByUrl('/cards'));
  }

  ngOnInit() { }
}
