
export interface Task{
	id: string,
	name: string,
	isFinished: boolean,
	isDeleting: boolean,
	isChanging: boolean,
}

export type TaskCreate = Omit<Task, 'id'>;

export enum Path{
	current = 'https://65ddf590dccfcd562f55f33e.mockapi.io/api/v1/Task',
	finished = 'https://65ddf590dccfcd562f55f33e.mockapi.io/api/v1/DeletedTask'
}