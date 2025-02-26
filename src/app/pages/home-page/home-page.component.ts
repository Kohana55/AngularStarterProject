import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps'


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  center: google.maps.LatLngLiteral = { lat: 51.576488, lng: -3.063940 }; // Example: San Francisco
  zoom = 12;
}
