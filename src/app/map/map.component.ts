import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Location } from '../ip.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any;
  marker: any;

  location: Location;

  @Input() set loc(data: Location) {
    this.location = data;
    this.renderMap();
    this.map.flyTo([data?.lat, data?.lng], 13);
    this.marker.setLatLng(new L.LatLng(data?.lat, data?.lng));
  }

  icon = L.icon({
    iconUrl: 'assets/images/icon-location.svg',
    iconSize: [26, 36], // size of the icon
    iconAnchor: [13, 36], // point of the icon which will correspond to marker's location
  });

  constructor() {}

  ngOnInit(): void {
    this.renderMap();
  }

  renderMap() {
    if (this.map == undefined) {
      console.log("called");
      this.map = L.map('map').setView(
        [this.location?.lat, this.location?.lng],
        13
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      this.marker = L.marker([this.location?.lat, this.location?.lng], {
        icon: this.icon,
      }).addTo(this.map);
    }
  }
}
