import { Component } from '@angular/core';
import { fadeIn, fadeInOut, fadeOut } from './animations/animation';




@Component({
	selector: 'app-material',
	templateUrl: './material.component.html',
	styleUrl: './material.component.scss',
	animations: [fadeInOut]
	// animations: [fadeIn, fadeOut]
})
export class MaterialComponent {

	isShown: boolean = true;

	public showBlock() {
		this.isShown = !this.isShown;
	}
}
