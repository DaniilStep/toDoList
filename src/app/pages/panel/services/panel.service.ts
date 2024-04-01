
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards, CardsCreate, Path } from '../models/cards.model';
import { Observable, map } from 'rxjs';



@Injectable()
export class PanelService {

	constructor(private http: HttpClient) { }
	
	public getCards(path: Path): Observable<Cards[]> {
		return this.http.get<Cards[]>(path);
	}

	public addCard(path: Path, data: CardsCreate): Observable<Cards> {
		return this.http.post<Cards>(path, data);
	}

	public changeCard(path: Path, data: {}, id: string): Observable<Cards> {
		return this.http.put<Cards>(`${path}/${id}`, data);
	}

	public deleteCard(path: Path, id: string): Observable<Cards> {
		return this.http.delete<Cards>(`${path}/${id}`)
	}
}
