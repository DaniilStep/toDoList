import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Money } from '../models/money.model';
import { Currencies, Price } from '../models/price.model';


@Injectable()
export class FinanceApiService {

	errorMessage: string = '';

	constructor(private http: HttpClient) {}

	public getAmount(): Observable<Money> {
		return this.http.get<Money>('assets/bitcoin.json');
	}

	public getRate(currency: Currencies): Observable<Price> {
		return this.http.get<Price>(`https://api.coinbase.com/v2/prices/${currency}/buy`).pipe(
			catchError(err => {
				console.log(err);
				this.errorMessage = err.message;
				return [];
			})
		)
	}
}