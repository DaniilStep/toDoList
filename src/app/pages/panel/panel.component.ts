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
	filteredCards!: Cards[];

	cardsTest!: Cards[];

	cardComponent!: Cards;

	cardIsChanging: boolean = false;

	cardIsFiltering: boolean = false;

	basket: Cards[] | undefined;

	addCardForm!: FormGroup;

	filterCardForm!: FormGroup;

	private createForm() {
		this.addCardForm = this.fb.group({
			'source': ['', [Validators.required]],
			'title': ['', [Validators.required]],
			'price': [, [Validators.required]],
		});

		this.filterCardForm = this.fb.group({
			'title': ['', [Validators.required]]
		})
	}

	constructor(private PanelService: PanelService, private fb: FormBuilder) {
		this.createForm();
	}

	// private getData() {
	// 	this.cards$ = this.PanelService.getCards(Path.cards);
	// }

	public getData() {
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

	public addItem() {
		const card = {
			source: 'source',
			title: 'title',
			price: 20,
			isChanging: false
		}

		this.PanelService.addCard(Path.cards, card).pipe(
			first()
		).subscribe(() => this.getData())
	}

	public toggleChange() {
		this.cardIsChanging = !this.cardIsChanging;
	}

	public test() {
		alert('not working yet')
	}

	public filterCards() {
		if (!this.filterCardForm.valid) return;

		this.cardIsFiltering = true;

		const data = this.filterCardForm.value;

		this.filteredCards = this.cards.filter(val => val.title.includes(data.title));
	}

	public clear() {
		this.cardIsFiltering = false;
		this.filterCardForm.controls['title'].setValue('');
	}
}