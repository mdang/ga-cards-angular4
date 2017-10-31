import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CardService {

  constructor(private http: Http) { }

  getCards() {
    return this.http
            .get(`${ environment.apiBaseUrl }/cards`)
            .map(response => response.json());
  }

  addCard(card) {
    return this.http
            .post(`${ environment.apiBaseUrl }/cards`, card)
            .map(response => response.json());
  }
}
