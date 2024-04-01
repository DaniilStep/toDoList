import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { CardComponent } from './modules/card/card.component';
import { SettingsComponent } from './modules/settings/settings.component';

const routes: Routes = [
	{
		path: '',
		component: PanelComponent
	},
	{
		path: 'card',
		loadChildren: () => import('./modules/card/card.module').then(m => m.CardModule)
	},
	{
		path: 'settings',
		loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
