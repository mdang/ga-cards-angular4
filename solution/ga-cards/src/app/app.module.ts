import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';

import { CardService } from './card.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CardsComponent,
    CardComponent,
    FooterComponent,
    AddCardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
