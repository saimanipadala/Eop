import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  isFlipped = false;
  private flipInterval: any;



  constructor() { }

  ngOnInit(): void {
    this.flipInterval = setInterval(() => {
    this.isFlipped = !this.isFlipped;
     }, 3000);
  }

  ngOnDestroy(): void{
    clearInterval(this.flipInterval);
  }

}
