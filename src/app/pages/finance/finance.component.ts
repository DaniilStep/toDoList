import { Component } from '@angular/core';
import { FinanceApiService } from './api/finance-api.service';
import { Observable, map, pipe, zip } from 'rxjs';
import { Currencies, Price } from './models/price.model';
import { Money } from './models/money.model';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
	styleUrl: './finance.component.scss'
})
export class FinanceComponent {

	isLoading: boolean = false;

	bybit!: number;
	emcd!: number;
	ledger!: number;
	bitcoin!: number;

	halving!: number;

	cryptoAmount$!: Observable<Money>;
	bitcoinAmount$!:Observable<number>;

	btcUsdRate$!: Observable<Price>;
	usdRubRate$!: Observable<Price>;
	btcRubRate$!: Observable<number>;
	
	usdAmount$!: Observable<number>;
	rubAmount$!: Observable<number>;

	firstSpecialAmount$!: Observable<number>;
	secondSpecialAmount$!: Observable<number>;
	thirdSpecialAmount$!: Observable<number>;

	private getAmountFromService() {
		this.cryptoAmount$ = this.financeApiService.getAmount();
		this.btcUsdRate$ = this.financeApiService.getRate(Currencies.BTCUSD);
		this.usdRubRate$ = this.financeApiService.getRate(Currencies.RUBUSD);
	}

	private assignValue() {
		this.bitcoinAmount$ = this.cryptoAmount$.pipe(
			map(val => Number(val.bybit) + Number(val.emcd) + Number(val.ledger)),
		);

		this.btcRubRate$ = zip(
			this.btcUsdRate$,
			this.usdRubRate$,
		).pipe(
			map((data) => Number(data[0].data.amount) * Number(data[1].data.amount))
		);

		this.usdAmount$ = zip(
			this.btcUsdRate$,
			this.bitcoinAmount$,
		).pipe(
			map(([btcUsdRate, btcAmount]) => Number(btcUsdRate.data.amount) * btcAmount)
		);
			
		this.rubAmount$ = zip(
			this.usdRubRate$,
			this.usdAmount$,
		).pipe(
			map(([usdRubRate, usdAmount]) => Number(usdRubRate.data.amount) * usdAmount)
		);

		this.firstSpecialAmount$ = this.btcRubRate$.pipe(
			map(val => val * 0.0022)
		);

		this.secondSpecialAmount$ = this.btcRubRate$.pipe(
			map(val => val * 0.00375)
		);

		this.thirdSpecialAmount$ = this.btcRubRate$.pipe(
			map(val => val * 0.00079668)
		);
	}

	private prepareData() {
		const currentDate = new Date().getTime();
		const halvingDate = new Date(2024, 3, 17).getTime();
		this.halving = Math.round((halvingDate - currentDate)/1000/60/60/24)
	}

	private spin() {
		this.isLoading = true;
		setTimeout(() => {
			this.isLoading = false;
		}, 2000);
	}

	constructor(public financeApiService: FinanceApiService) {
		this.prepareData();
	}

	public refresh() {
		this.getAmountFromService();
		this.assignValue();
		this.spin();
	}

	ngOnInit() {
		this.getAmountFromService();
		this.assignValue();
		this.spin();
	}
}

// деструкутризация объекта

// JFaH83ukmg8gSJmYU1 key

// zs4IP3kHl07YfEyiebNS6nW0aEYkmlofFdqU secret

// https://api.coinbase.com/v2/prices/BTC-USD/buy

// https://api.coinbase.com/v2/prices/USD-RUB/buy