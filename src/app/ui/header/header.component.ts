import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
	
	constructor(private router: Router) {
		
	}

	// goHome() {
	// 	this.router.navigate(['']);
	// 	console.log('workin')
	// }
	// goAbout() {
	// 	this.router.navigate(['/about'])
	// }
}
