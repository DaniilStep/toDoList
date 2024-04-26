import { Component, OnInit } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Cards, Path } from '../../models/cards.model';
import { PanelService } from '../../services/panel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {

	cards$!: Observable<Cards[]>;

	cards!: Cards[];

	changeCardForm!: FormGroup;

	dataLoading: boolean = false;

	private createForm() {
		this.changeCardForm = this.fb.group({
			'source': ['', [Validators.required]],
			'title': ['', [Validators.required]],
			'price': ['', [Validators.required]],
		})
	}

	constructor(private PanelService: PanelService, private fb: FormBuilder) {}

	ngOnInit(): void {
		this.getData();
		this.createForm();
	}

	public getData() {
		this.dataLoading = true;
		this.PanelService.getCards(Path.cards).pipe(
			first()
		).subscribe(val => {
			this.cards = val;
			this.dataLoading = false;
		})
	}

	public deleteData(i: Cards) {
		this.PanelService.deleteCard(Path.cards, i.id).pipe(
			first()
		).subscribe((deletedCard) => {
			this.cards = this.cards.filter((i) => i.id != deletedCard.id);
		})
	}

	public toggleChange(i: Cards) {

		const { title, source, price } = i;

		this.changeCardForm.patchValue({
			title,
			source,
			price
		});

		// this.changeCardForm.controls['title'].setValue(i.title);
		// this.changeCardForm.controls['source'].setValue(i.source);
		// this.changeCardForm.controls['price'].setValue(i.price);
		
	}

	public chandeData(i: Cards) {

		if (!this.changeCardForm.valid) {
			this.toggleChange(i);
		}
		
		const data = this.changeCardForm.value;

		this.PanelService.changeCard(Path.cards, data, i.id).pipe(
			first()
		).subscribe(() => {
			this.getData();
			this.toggleChange(i);
		})
	}
}
