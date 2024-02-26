import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
	},
	{
		path: 'panel',
		loadChildren: () => import('./pages/panel/panel.module').then(m => m.PanelModule)
	},
	{
		path: 'tasks',
		loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule)
	},
	{
		path: 'finance',
		loadChildren: () => import('./pages/finance/finance.module').then(m => m.FinanceModule)
	},
	{
		path: 'about',
		loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
	},
	{
		path: 'not-found',
		loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
	},
	{
		path: '**',
		redirectTo: 'not-found'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}