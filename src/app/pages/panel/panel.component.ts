import { Component, OnInit } from '@angular/core';
import { PanelService } from './services/panel.service';
import { Observable, first } from 'rxjs';
import { Cards, CardsCreate, Path } from './models/cards.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {
	// cards$!: Observable<Cards[]>;
	// basket$!: Observable<Cards[]>;

	cards!: Cards[];

	cardsTest!: Cards[];

	cardComponent!: Cards;

	basket!: Cards[];

	addCardForm!: FormGroup;

	private createForm() {
		this.addCardForm = this.fb.group({
			'source': ['', [Validators.required]],
			'title': ['', [Validators.required]],
			'price': [, [Validators.required]],
		})
	}

	constructor(private PanelService: PanelService, private fb: FormBuilder) {
		this.createForm();
	}

	// private getData() {
	// 	this.cards$ = this.PanelService.getCards(Path.cards);
	// }

	private getData() {
		this.PanelService.getCards(Path.cards).pipe(
			first()
		).subscribe(val => this.cards = val);
	}

	// private getBasket() {
	// 	this.basket$ = this.PanelService.getCards(Path.basket);
	// }

	private getBasket() {
		this.PanelService.getCards(Path.basket).pipe(
			first()
		).subscribe(val => this.basket = val);
	}
	
	ngOnInit(): void {
		this.getData();	
		this.getBasket();
	}

	public addToBasket(card: Cards) {
		this.PanelService.addCard(Path.basket, card).pipe(
			first()
		).subscribe(() => {
			this.getBasket();
		});
	}
}
