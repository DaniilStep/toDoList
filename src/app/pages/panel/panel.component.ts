import { Component, OnInit } from '@angular/core';
import { PanelService } from './services/panel.service';
import { Observable, first, zip } from 'rxjs';
import { Cards, Path, FilterProducts, cardFilters2 } from './models/cards.model';
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

	clothes!: Cards[];
	// sortedClothes!: Cards[];
	allClothes!: Cards[];

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

		this.PanelService.getCards(Path.clothes).pipe(
			first()
		).subscribe(val => {
			this.allClothes = this.clothes = val;
		});
	}

	private getBasket() {
		this.PanelService.getCards(Path.basket).pipe(
			first()
		).subscribe(val => this.basket = val);
	}
	
	ngOnInit(): void {
		this.getData();	
		this.getBasket();
		// this.asyncTest();
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
			sex: 'men'
		}

		this.PanelService.addCard(Path.clothes, card).pipe(
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

		this.filteredCards = this.clothes.filter(val => val.title.includes(data.title));
	}

	public clear() {
		this.cardIsFiltering = false;
		this.filterCardForm.controls['title'].setValue('');
	}

	// public asyncTest() {
	// 	this.cards$ = this.PanelService.getCards(Path.cards);
	// 	this.cardsTest$ = this.PanelService.getCards(Path.test);

	// 	if (this.selectedFilter == FilterProducts.all) {
	// 		zip([this.cards$, this.cardsTest$]).subscribe(([arr1, arr2]) => {
	// 			this.finalCards = [...arr1, ...arr2];
	// 		});
	// 	}
	// 	else if (this.selectedFilter == FilterProducts.men) {
	// 		this.finalCards = this.cards
	// 	}
	// 	else if (this.selectedFilter == FilterProducts.women) {
	// 		this.finalCards = this.cardsTest;
	// 	}
	// }

	public onSelectFilter(i: string) {
		this.selectedFilter = i;
		// this.asyncTest();
		this.sortClothes();
	}

	public sortClothes() {
		if (this.selectedFilter == FilterProducts.men) {
			this.clothes = this.allClothes.filter(val => val.sex === 'men');
		}
		else if (this.selectedFilter == FilterProducts.women) {
			this.clothes = this.allClothes.filter(val => val.sex === 'women');
		}
		else {
			this.clothes = this.allClothes.sort((a, b) => b.price - a.price)
		}
	}
}