import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
	@Input() disabled: boolean = false;
}
