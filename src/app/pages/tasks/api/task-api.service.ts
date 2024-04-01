import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskCreate } from '../models/task.model';
import { Path } from '../models/task.model';

@Injectable()
export class TaskApiService {
	
	constructor(private http: HttpClient) { }
	
	public getData(path: Path): Observable<Task[]> {
		return this.http.get<Task[]>(path);
	}

	public addData(path: Path, data: TaskCreate): Observable<Task> {
		return this.http.post<Task>(path, data);
	}

	public deleteData(path: Path, id: string): Observable<Task> {
		return this.http.delete<Task>(`${path}/${id}`);
	}

	public changeData(path: Path, id: string, body: {}): Observable<Task> {
		return this.http.put<Task>(`${path}/${id}`, body);
	}
}
