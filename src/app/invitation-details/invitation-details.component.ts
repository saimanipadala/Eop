import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-invitation-details',
  templateUrl: './invitation-details.component.html',
  styleUrls: ['./invitation-details.component.css']
})
export class InvitationDetailsComponent implements OnInit, OnDestroy {
 coupleNames = 'SUNDAR ❤️ JAHNAVI';
  date = 'On 24th October, Friday, 2025, <br> at 10:40pm ✍';
  time= '🍽️ 7:00 P.m Onwards ';
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
    // Start countdown to 24 Oct 2025 (local time)
    const target = new Date(2025, 9, 24, 0, 0, 0); // month is 0-indexed: 9 = October
    this.startCountdown(target);
  }

  // Countdown timer
  countdown = { days: '0', hours: '00', minutes: '00', seconds: '00' };
  private countdownInterval: any;

  private startCountdown(targetDate: Date) {
    this.updateCountdown(targetDate);
    this.countdownInterval = setInterval(() => this.updateCountdown(targetDate), 1000);
  }

  private updateCountdown(targetDate: Date) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      this.countdown = { days: '0', hours: '00', minutes: '00', seconds: '00' };
      clearInterval(this.countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countdown = {
      days: String(days),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0')
    };
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

}
