import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class CardService {

  constructor(private http: Http) { }

  getCards() {
    return this.http
            .get(`${ environment.apiBaseUrl }/cards`);
  }

  addCard(card) {
    return this.http
            .post(`${ environment.apiBaseUrl }/cards`, card);
  }
}
