
import { Injectable } from '@angular/core';



@Injectable()
export class PanelService {

	private data: string[] = ['Tom', 'Bob', 'Mark'];

	getData(): string[] {
		return this.data;
	}
	
	addData(name: string) {
		this.data.push(name);
	}
}
