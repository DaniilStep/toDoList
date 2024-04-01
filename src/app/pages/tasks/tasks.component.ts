import { Component, OnInit } from '@angular/core';
import { Observable, first, map } from 'rxjs';
import { Path, Task, TaskCreate } from './models/task.model';
import { TaskApiService } from './api/task-api.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

	createTaskForm!: FormGroup;
	deleteTaskForm!: FormGroup;
	putTaskForm!: FormGroup;

	test: string = 'changed 2';

	taskLoading: boolean = false;
	dataSending: boolean = false;
	taskChanging: boolean = false;

	tasks!: Task[];
	deletedTasks!: Task[];

	tasks$!: Observable<Task[]>;

	private createForm() {
		this.createTaskForm = this.fb.group({
			'name': ['', [Validators.required]]
		});
		
		this.deleteTaskForm = this.fb.group({
			'id': ['', [Validators.required]]
		});

		this.putTaskForm = this.fb.group({
			'name': ['', [Validators.required]]
		})
	}

	constructor(private taskApiService: TaskApiService, private fb: FormBuilder) {
		this.createForm();
	}

	ngOnInit(): void {
		this.getData();
		this.getDeletedData();
	}

	public notWorking() {
		alert('Пока что не работает')
	}

	public getData() {
		this.taskLoading = true;
		this.taskApiService.getData(Path.current).pipe(
			first()
		).subscribe(val => {
			this.tasks = val;
			this.taskLoading = false;
		});
	}

	public submit() {
		if (!this.createTaskForm.valid) return;

		const data = this.createTaskForm.value;

		this.taskApiService.addData(Path.current, data).pipe(
			first()
		).subscribe(
			() => {
				this.dataSending = true;
				this.getData()
			}
		);

		this.createTaskForm.controls['name'].setValue('');
	}

	public toggleTask(task: Task) {
		task.isFinished = !task.isFinished;
	}

	public toggleDelete(task: Task) {
		task.isDeleting = !task.isDeleting;
		task.isFinished = true;
	}

	public deleteTask(id: string, i: Task) {
		
		this.toggleDelete(i);
		
		this.taskApiService.deleteData(Path.current, id).pipe(
			first()
		).subscribe(deletedTask => {
			this.tasks = this.tasks.filter(({ id }) => id != deletedTask.id);
			this.postDeletedTask(i);
		})
	}

	public changeTask(id: string) {

		const body = { name: this.putTaskForm.controls['name'].value };

		this.taskApiService.changeData(Path.current, id, body).pipe(
			first()
		).subscribe(
			() => {this.getData()}
		);
	}

	public toggleChange(task: Task) {
		task.isChanging = !task.isChanging;

		this.putTaskForm.controls['name'].setValue(task.name);
	}



	public getDeletedData() {
		this.taskLoading = true;
		this.taskApiService.getData(Path.finished).pipe(
			first(),
			// map((task) => {
			// 	task.sort()
			// })
		).subscribe(val => {
			this.deletedTasks = val;
			this.taskLoading = false;
		});
	}

	public postDeletedTask(data: TaskCreate) {
		this.taskApiService.addData(Path.finished, data).pipe(
			first()
		).subscribe(
			() => {
				this.getDeletedData();
			}
		)
	}

	public deleteDeletedTask(id: string, i: Task) {
		this.toggleDelete(i);

		this.taskApiService.deleteData(Path.finished, id).pipe(
			first()
		).subscribe(deletedTask => {
			this.deletedTasks = this.deletedTasks.filter(({ id }) => id != deletedTask.id);
			// this.postDeletedTask(i);
		})
	}
}
