import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/config.model';
import { Observable, config, map } from 'rxjs';

@Injectable()
export class ServerApiService {

	userName: string = '';
	response!: any;

	dataUrl: string = 'assets/data.json';

	constructor(private http: HttpClient) { }

	public search() {
		this.http.get('https://github.com/' + this.userName).subscribe((response) => {
			this.response = response;
			console.log(this.response)
		})
	}
	
	public getData(): Observable<Config[]> {
		return this.http.get<Config[]>(this.dataUrl).pipe(
			map((data: any) => {
				let userList = data['userList'];
				return userList.map((user: any): Config => {
					return new Config(user.userName, user.userAge);
				})
			})
		)
		// return this.http.get<Config>(this.dataUrl);
	}
}
