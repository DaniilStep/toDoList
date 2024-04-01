import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cards, Path } from '../../models/cards.model';
import { PanelService } from '../../services/panel.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
	@Input() card!: Cards;

	constructor() {}

	@Output() onAddToBasket: EventEmitter<Cards> = new EventEmitter();

	public addToBasket() {
    //moe vazhnee
		this.onAddToBasket.emit(this.card);

		// Не работает отображение миниатюры в корзине
		// angular material
		// primeNG
	}
}
