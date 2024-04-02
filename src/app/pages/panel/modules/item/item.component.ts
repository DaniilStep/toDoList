import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cards, Path } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanelService } from '../../services/panel.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
	@Input() card!: Cards;

	@Input() cardIsChanging: boolean = false;

	isChanging: boolean = false;
	changeCardForm!: FormGroup;

	private CreateForm() {
		this.changeCardForm = this.fb.group({
			'source': ['', [Validators.required]],
			'title': ['', [Validators.required]],
			'price': [, [Validators.required]],
		})
	}

	constructor(private fb: FormBuilder, private PanelService: PanelService) {
		this.CreateForm();
	}

	@Output() onAddToBasket: EventEmitter<Cards> = new EventEmitter();

	public addToBasket() {
		this.onAddToBasket.emit(this.card);

		// https://www.conventionalcommits.org/ru/v1.0.0/
		// Не работает отображение миниатюры в корзине
		// angular material
		// primeNG
	}

	public changeCard() {

		const data = this.changeCardForm.value;

		this.PanelService.changeCard(Path.cards, data, this.card.id).pipe(
			first()
		).subscribe(() => this.isChanging = false);
	}

	public deleteCard() {
		this.PanelService.deleteCard(Path.cards, this.card.id).pipe(
			first()
		).subscribe()
	}

	public toggleChange() {
		this.isChanging = !this.isChanging;

		const { source, title, price } = this.card;
		this.changeCardForm.patchValue({
			source,
			title,
			price
		});
	}
}
