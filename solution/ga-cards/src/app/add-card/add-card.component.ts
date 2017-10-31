import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor() { }

  handleSubmit(form: NgForm) {
    console.log('form has been submitted', form.value)
  }

  ngOnInit() { }
}
