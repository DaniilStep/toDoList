import { Component, Input } from '@angular/core';
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

	constructor(private PanelService: PanelService) {}

	public addToBasket(i: Cards) {
		this.PanelService.addCard(Path.basket, i).pipe(
			first()
		).subscribe()

		// Не работает отображение миниатюры в корзине
		// angular material
		// primeNG
	}
}
