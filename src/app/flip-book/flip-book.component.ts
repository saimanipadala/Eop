import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-book',
  templateUrl: './flip-book.component.html',
  styleUrls: ['./flip-book.component.css']
})
export class FlipBookComponent implements OnInit {
 images = [
    'assets/images/flip1.jpg',
    'assets/images/flip2.jpg',
    'assets/images/flip3.jpg',
    'assets/images/flip4.jpg'
  ];
  currentPageIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(): void {
    if (this.currentPageIndex < this.images.length - 1) {
      this.currentPageIndex++;
    }
  }

  prevPage(): void {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }
}
 


