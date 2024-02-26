import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Money } from '../models/money.model';

@Injectable()
export class FinanceApiService {

	constructor(private http: HttpClient) {}

	public getAmount(): Observable<Money> {
		return this.http.get<Money>('assets/bitcoin.json');
	}
}