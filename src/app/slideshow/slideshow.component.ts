import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
 images = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/4.jpg',
    'assets/images/6.jpg',
    'assets/images/7.jpg'

  ];
  currentImageIndex = 0;
  private intervalId: any;

 startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change image every 3 seconds (3000ms)
  }

   stopSlideshow(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

   previousSlide(): void {
    this.stopSlideshow(); // Stop auto-slide on manual navigation
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.images.length - 1;
    }
    this.startSlideshow(); // Restart timer after manual navigation
  }
 nextSlide(): void {
    this.stopSlideshow(); // Stop auto-slide on manual navigation
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
    this.startSlideshow(); // Restart timer after manual navigation
  }

  constructor() { }


}
