import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation-details',
  templateUrl: './invitation-details.component.html',
  styleUrls: ['./invitation-details.component.css']
})
export class InvitationDetailsComponent implements OnInit {
 coupleNames = 'SUNDAR ❤️ JAHNAVI';
  date = 'Friday, October 24, 2025✍';
  venue= 'V͟e͟n͟u͟e͟'
  location = 'VenuGoplala Auditorium';


  TcoupleNames = 'సుందర్ ❤️ జాహ్నవి ';
  Tdate = 'శుక్రవారం, అక్టోబర్ 𝟐𝟒, 𝟐𝟎𝟐𝟓✍';
  Tvenue='వేదిక';
  Tlocation = 'వేణుగోపాల ఆడిటోరియం (ఎస్.వి.జి హై స్కూల్ ప్రక్కన).';
  constructor() { }
    openGoogleMaps(lat: number, lng: number, name: string) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(mapsUrl, '_blank');
  }

  ngOnInit(): void {
  }

}
