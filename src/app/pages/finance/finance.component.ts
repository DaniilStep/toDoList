import { Component } from '@angular/core';
import { FinanceApiService } from './api/finance-api.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
	styleUrl: './finance.component.scss'
})
export class FinanceComponent {
	
	btcUSD!: number;
	rubUSD!: number;
	btcRUB!: number;

	bybit!: number;
	emcd!: number;
	ledger!: number;
	bitcoin!: number;

	halving!: number;

	private assignValue(data: any) {
		this.btcUSD = data.btcUSD;
		this.rubUSD = data.rubUSD;
		this.bybit = data.bybit;
		this.emcd = data.emcd;
		this.ledger = data.ledger;
	}

	private convert() {
		this.btcRUB = Math.round(this.btcUSD * this.rubUSD);
		this.bitcoin = this.bybit + this.emcd + this.ledger;
	}

	private getAmountFromService() {
		this.financeApiService.getAmount().subscribe(data => {
			this.assignValue(data);
			this.convert();
		});
	}

	private prepareData() {
		const currentDate = new Date().getTime();
		const halvingDate = new Date(2024, 3, 17).getTime();
		this.halving = Math.round((halvingDate - currentDate)/1000/60/60/24)
	}

	constructor(private financeApiService: FinanceApiService) {
		this.prepareData();
	}

	public apply(rubUSD: number, btcUSD: number) {
		this.rubUSD = rubUSD;
		this.btcUSD = btcUSD;
		this.convert();
	}

	ngOnInit() {
		this.getAmountFromService();
	}
}

// деструкутризация объекта