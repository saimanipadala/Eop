import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; // Import LeafletModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitationDetailsComponent } from './invitation-details/invitation-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { FlipBookComponent } from './flip-book/flip-book.component';
// import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { MapComponent } from './map/map.component';
import { SparkleOverlayComponent } from './sparkle-overlay/sparkle-overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    InvitationDetailsComponent,
    PhotoGalleryComponent,
    SlideshowComponent,
    FooterComponent,
    FlipBookComponent,
    // PhotoAlbumComponent,
    MapComponent,
    SparkleOverlayComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
