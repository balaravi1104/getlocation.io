import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = ' Hi maps';
  show = false;
  latitude: any;
  longitude: any;
  crt: any;

    enableHighAccuracy : true

    getloc() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    }
   }
   display() {
     this.show = true;
   }
  showPosition(position) {
     this.crt = position.coords.accuracy;
     this.latitude = position.coords.latitude;
   this.longitude = position.coords.longitude;
   }
   ontouched(event){
     console.log(event);
     this.latitude = event.coords.lat;
     this.longitude = event.coords.lng;
   }
  }

