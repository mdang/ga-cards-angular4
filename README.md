# Cards Against Assembly

## Preparation 

- [Angular CLI](https://cli.angular.io/)
- Understanding of fundamental concepts for Angular 2+

## Demo

> [ga-cards.herokuapp.com](https://ga-cards.herokuapp.com/)

Cards are user generated and initially appear face down until a user clicks on the card, which then reveals it.

![screenshot](./assets/screenshot.png)

## Cards API 

- **GET** [https://ga-cards.herokuapp.com/cards](https://ga-cards.herokuapp.com/cards)
	- Note: Older cards don't have a `createdAt` value

```json
[
	{
		_id: "5631462be4b07f34b0915a0c",
		question: "I couldn't complete my assignment because ________"
	},
	{
		_id: "56314647e4b07f34b0915a1c",
		question: "I get by with a little help from ________"
	},
	{
		_id: "5631465fe4b07f34b0915a1f",
		question: "The field trip was completely ruined by ________"
	},
	{
		_id: "590231880f48d5419f94f4fc",
		question: "It was the best of _________, it was the worst of ________.",
		createdAt: "2017-04-27T17:59:36.595Z",
		__v: 0
	},
	{
		_id: "590231caab657d0c98036421",
		question: "I'm very bad at this because _________",
		createdAt: "2017-04-27T18:00:42.162Z",
		__v: 0
	}
]
```

- **POST** [https://ga-cards.herokuapp.com/cards](https://ga-cards.herokuapp.com/cards)
	- Parameter: `question` - **Required** - Question to add

## Adding Dependencies

- Navigate to the [starter code](./starter/ga-cards/) and install dependencies with `$ npm i`
- The app uses [Bootstrap](https://getbootstrap.com/), so add Bootstrap either locally or through a CDN within the base **index.html** page 

## Plan Components 

- Look through the mockup and figure out what components our app will require 

```html
<app-root>
	<app-header></app-header>
	<app-nav></app-nav>
	
	<!-- cards state -->
	<app-cards>
		<app-card></app-card>
		<app-card></app-card>
	</app-cards>
	
	<!-- add card state -->
	<app-add-card></app-add-card>
	
	<!-- about state -->
	<app-about></app-about>
	
	<app-footer></app-footer>
</app-root>
```

## Create Components 

Generate the components we'll need:

- `$ ng g c header`
- `$ ng g c nav`
- `$ ng g c cards`
- `$ ng g c card`
- `$ ng g c add-card`
- `$ ng g c about`
- `$ ng g c footer`

### Exercise (15 min)

- Fill in the placeholder components with the static HTML from our mockups
- Seperate the CSS in our **main.css** file to the relevant components

NOTE: Don't worry about the `<app-card>` component for now, we'll come back to that. 

## Router Setup

- Add an outlet to where new content should appear on state changes in **app.component.html**

```html
<!-- app.component.html -->
<router-outlet></router-outlet>
```

- Create the file **src/app/app-routing.module.ts**
- Import router dependencies: 

```js
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
```

- Import components required: 

```js
// app-routing.module.ts
import { CardsComponent } from './cards/cards.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AboutComponent } from './about/about.component';
```

- Configure routes 

```js
// app-routing.module.ts
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'add-card',
    component: AddCardComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: '**',
    redirectTo: '/cards'
  }
];
```

- Create the router 

```js
// app-routing.module.ts
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
```

- Within **src/app/app.module.ts** import the `AppRoutingModule` file

```js
// app.module.ts
import { AppRoutingModule } from './app-routing.module';
```

- Import the `AppRoutingModule` into the core app component 

```js
// app.module.ts
// ...
	imports: [
		BrowserModule,
		AppRoutingModule
	]
// ...
```

- Test our routes: 
  - [http://localhost:4200/cards](http://localhost:4200/cards)
  - [http://localhost:4200/add-card](http://localhost:4200/add-card)
  - [http://localhost:4200/about](http://localhost:4200/about) - Check the styling for the card!
  - [http://localhost:4200/fake-route-that-does-not-exist](http://localhost:4200/fake-route-that-does-not-exist)

- Update our navigtion links to use the router: 

```html
<a routerLink="/about">About</a>
```

We still have a problem though, our active link is showing as **Home** and not changing as the user clicks the different links. 😢

### Exercise (15 min)

Figure out a way we can set the active link for the navigation items. We need to set a class of `active` on the currently active link. 

## Using the Card Component within Cards





