import { Component, OnInit } from '@angular/core';
import { PanelService } from './services/panel.service';
import { Observable, first, zip } from 'rxjs';
import { Cards, Path, FilterProducts, cardFilters, cardFilters2 } from './models/cards.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {

	cards$!: Observable<Cards[]>;
	cardsTest$!: Observable<Cards[]>;
	finalCards$!: Observable<Cards[]>;

	filters: string[] = cardFilters2;
	selectedFilter: string = 'All';

	cards!: Cards[];
	filteredCards!: Cards[];
	cardsTest!: Cards[];
	finalCards!: Cards[];
	basket: Cards[] | undefined;

	cardComponent!: Cards;

	cardIsChanging: boolean = false;
	cardIsFiltering: boolean = false;

	addCardForm!: FormGroup;
	filterCardForm!: FormGroup;

	currentFilter: FilterProducts = FilterProducts.all;

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

	// public getTestProducts() {
	// 	this.PanelService.getCards(Path.test).pipe(
	// 		first()
	// 	).subscribe(val => this.cardsTest = val);
	// }

	public getData() {
		this.PanelService.getCards(Path.cards).pipe(
			first()
		).subscribe(val => this.cards = val);

		this.PanelService.getCards(Path.test).pipe(
			first()
		).subscribe(val => this.cardsTest = val);

		// this.filteringProducts();
	}

	private getBasket() {
		this.PanelService.getCards(Path.basket).pipe(
			first()
		).subscribe(val => this.basket = val);
	}
	
	ngOnInit(): void {
		this.getData();	
		this.getBasket();
		this.asyncTest();
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

	// public getTestProducts() {
	// 	this.PanelService.getCards(Path.test).pipe(
	// 		first()
	// 	).subscribe(val => this.cardsTest = val);
	// }

	// public filteringProducts() {
	// 	if (this.currentFilter === FilterProducts.all) {
	// 		this.finalCards = Object.assign(this.cards, this.cardsTest);
	// 	};
	// 	console.log(this.finalCards)
	// 	console.log(this.cards)
	// }

	// public asyncTest() {
	// 	this.cards$ = this.PanelService.getCards(Path.cards);
	// 	this.cardsTest$ = this.PanelService.getCards(Path.test);

	// 	if (this.currentFilter === 0) {
	// 		zip([this.cards$, this.cardsTest$]).subscribe(([arr1, arr2]) => {
	// 			this.finalCards = [...arr1, ...arr2];
	// 		});
	// 	}
	// 	else if (this.currentFilter === 1) {
	// 		this.finalCards = this.cards
	// 	}
	// 	else if (this.currentFilter === 2) {
	// 		this.finalCards = this.cardsTest;
	// 	}
	// }

	public asyncTest() {
		this.cards$ = this.PanelService.getCards(Path.cards);
		this.cardsTest$ = this.PanelService.getCards(Path.test);

		if (this.selectedFilter == FilterProducts.all) {
			zip([this.cards$, this.cardsTest$]).subscribe(([arr1, arr2]) => {
				this.finalCards = [...arr1, ...arr2];
			});
		}
		else if (this.selectedFilter == FilterProducts.men) {
			this.finalCards = this.cards
		}
		else if (this.selectedFilter == FilterProducts.women) {
			this.finalCards = this.cardsTest;
		}
	}

	// public changeFilter(data: FilterProducts) {
	// 	this.currentFilter = data;

	// 	this.asyncTest()
	// }

	public onSelectFilter(i: string) {
		this.selectedFilter = i;
		this.asyncTest()
	}
}