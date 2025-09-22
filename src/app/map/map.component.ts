import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

    // Define the location and a name for the marker
  private lat: number = 16.62621803980902;
  private lng: number = 81.73905087243517;
  private markerName: string = 'వేణుగోపాల ఆడిటోరియం';

  // Define the map options
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 16,
    center: L.latLng(this.lat, this.lng)
  };

  // Define the marker as a property, but do not add it to the options
  private marker: L.Marker | undefined;

  // This method is called when the map is ready
  onMapReady(map: L.Map) {
    // Create the marker and bind the popup
    this.marker = L.marker([this.lat, this.lng])
      .bindPopup(`<b>${this.markerName}</b>`, { autoClose: false });
    
    // Add the marker to the map
    this.marker.addTo(map);

    // Open the popup on the marker
    this.marker.openPopup();
  }
}
