import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-press-button',
  templateUrl: './press-button.component.html',
  styleUrl: './press-button.component.scss'
})
export class PressButtonComponent {
	
	level: number = 0;

	@Output() isHeating = new EventEmitter<boolean>();
	btnClick() {

		if (this.level !== 0) {
			this.level--;
		}

		else {
			this.level = 3
		}

		this.isHeating.emit(this.level != 0)
	}
}
