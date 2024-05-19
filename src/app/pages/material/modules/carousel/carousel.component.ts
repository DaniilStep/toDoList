import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

	selectedIndex: number = 0;
	images: Carousel[] = [
		{
			src: '../../../../../assets/img/carousel/1.jpeg',
			alt: '1',
			id: 0,
		},
		{
			src: '../../../../../assets/img/carousel/2.jpeg',
			alt: '2',
			id: 1,
		},
		{
			src: '../../../../../assets/img/carousel/3.jpeg',
			alt: '3',
			id: 2,
		},
		{
			src: '../../../../../assets/img/carousel/4.jpeg',
			alt: '4',
			id: 3,
		},
	];

	ngOnInit(): void {
		
	}

	public selectImage(image: number) {
		this.selectedIndex = image
	}

	public prewImage() {
		if (this.selectedIndex == 0) {
			this.selectedIndex = this.images.length - 1;
		} else {
			this.selectedIndex--;
		}
	}

	public nextImage() {
		if (this.selectedIndex == this.images.length - 1) {
			this.selectedIndex = 0
		} else {
			this.selectedIndex++
		}
	}

}
