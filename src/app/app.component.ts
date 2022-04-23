import { Component, OnInit } from '@angular/core';
import { IpDetail, IpService, Location } from './ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ipAddress: string = "49.244.91.241";

  location: Location = {
    country: '',
    region: '',
    city: '',
    lat: 27.70169,
    lng: 85.3206,
    postalCode: '',
    timezone: '',
    geonameId: 0
  }

  ipDetail: IpDetail = {
    ip: '',
    location: null,
    domain: [],
    as: null,
    isp: ''
  }

  constructor(private ipService: IpService) {}

  ngOnInit() {
    this.getIpDetail();
  }

  getIpDetail() {
    this.ipService
      .getIpDetail(this.ipAddress)
      .subscribe((res) => {
        this.ipDetail = res;
        this.location = res.location;
        console.log(this.ipDetail);
      });
  }
}
