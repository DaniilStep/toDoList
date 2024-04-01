import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cards } from '../../models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
	@Input() card!: Cards;

	isChanging: boolean = false;

	constructor() {}

	@Output() onAddToBasket: EventEmitter<Cards> = new EventEmitter();

	public addToBasket() {
		this.onAddToBasket.emit(this.card);

		// https://www.conventionalcommits.org/ru/v1.0.0/
		// Не работает отображение миниатюры в корзине
		// angular material
		// primeNG
	}
}
