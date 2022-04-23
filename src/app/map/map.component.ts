import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';
import { Location } from '../ip.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnChanges {
  private map;

  @Input() location: Location;

  constructor() {}

  ngOnChanges(): void {
    console.log(this.location?.lat,this.location?.lng);
    this.renderMap(this.location?.lat,this.location?.lng);
  }

  ngOnInit(): void {}

  renderMap(lat:number, lng:number) {
    console.log("called");
    this.map = L.map('map').setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([lat, lng]).addTo(this.map);
  }
}
