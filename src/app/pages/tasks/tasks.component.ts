import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
	visible!: boolean;
	buttonText!: string;
	newTask!: string;
	tasks: string[] = []
	task!: string;
	finished!: boolean;

	private prepareData(visible: boolean, buttonText: string, finished: boolean) {
		this.visible = visible = false;
		this.buttonText = buttonText = 'Добавить';
		this.finished = finished = false;
	}

	constructor() {
		this.prepareData(this.visible, this.buttonText, this.finished);
	}

	public changeVisible() {
		this.visible = !this.visible;
		if (this.buttonText == 'Добавить') {
			this.buttonText = 'Скрыть';
		}
		else {
			this.buttonText = 'Добавить'
		}
	}

	public addNewTask(task: string) {
		this.tasks.push(task);
		console.log(this.tasks);
	}

	public finishTask() {
		this.finished = !this.finished;
	}
}
