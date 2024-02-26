import { Component } from '@angular/core';
import { PanelService } from './services/panel.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
	statement: number = 0;

	turnedOn!: boolean;

	name: string = 'Tom';

	items: string[] = [];

	newName: string = '';

	constructor(private panelService: PanelService) {
		
	}

	public addItem(name: string) {
		this.panelService.addData(name);
	}

	public switch(event: boolean) {
		this.turnedOn = event
	}

	public plus() {
		this.statement += 1;
	}

	public minus() {
		this.statement -= 1;
	}

	ngOnInit() {
		this.items = this.panelService.getData();
	}
}
