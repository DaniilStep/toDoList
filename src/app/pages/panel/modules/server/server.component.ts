import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Config } from './models/config.model';
import { ServerApiService } from './api/server-api.service';



@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrl: './server.component.scss'
})
export class ServerComponent {

	userName: string = '';
	response!: any;

	users: Config[] = [];

	user!: Config | undefined;

	constructor(private http: HttpClient, private serverApiService: ServerApiService) { }

	search() {
		this.http.get('https://api.github.com/users/' + this.userName).subscribe((response) => {
			this.response = response;
			console.log(this.response)
		})
	}

	ngOnInit() {
		this.serverApiService.getData().subscribe(
			(data: Config[]) => this.users = data
		)

		this.serverApiService.getData().subscribe((data: Config[]) => {
			this.user = data[1];
			
			console.log(data)
		})
	}
}
