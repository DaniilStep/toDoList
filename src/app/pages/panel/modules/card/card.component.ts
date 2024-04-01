import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter, first, map } from 'rxjs';
import { Cards, Path } from '../../models/cards.model';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

	productList$!: Observable<Cards[]>;
	productList!: Cards[];
	sum!: number;

	constructor(private PanelService: PanelService) { }

	ngOnInit(): void {
		this.getData();
	}

	public getData() {
		// this.productList$ = this.PanelService.getCards(Path.basket);

		this.PanelService.getCards(Path.basket).pipe(
			first()
		).subscribe(
			val => {
				this.productList = val;
				this.getSum();
			}
		)
	}

	public deleteData(id: string) {
		this.PanelService.deleteCard(Path.basket, id).pipe(
			first()
		).subscribe(
			deletedCard => {
				this.productList = this.productList.filter((i) => i.id != deletedCard.id);
				this.getSum();
			}
		)
	}

	public filterTest() {
		const list = this.productList.filter((i) => i.title === 'Поло');
		console.log(list)
	}

	public getSum() {
		this.sum = this.productList.reduce((total, i) => total + +i.price, 0)
	}
}
