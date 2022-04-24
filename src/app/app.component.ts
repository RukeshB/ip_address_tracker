import { Component, OnInit } from '@angular/core';
import { IpDetail, IpService, Location } from './ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ipAddress:string;

  location: Location = {
    country: '',
    region: '',
    city: '',
    lat: 27.70169,
    lng: 85.3206,
    postalCode: '',
    timezone: '',
    geonameId: 0,
  };

  ipDetail: IpDetail = {
    ip: '',
    location: null,
    domains: [],
    as: null,
    isp: '',
  };

  dummy_data: IpDetail = {
    ip: '8.8.8.8',
    location: {
      country: 'US',
      region: 'California',
      city: 'Mountain View',
      lat: 37.40599,
      lng: -122.078514,
      postalCode: '94043',
      timezone: '-07:00',
      geonameId: 5375481,
    },
    domains: [],
    as: {
      asn: 15169,
      name: 'Google LLC',
      route: '8.8.8.0/24',
      domain: 'https://about.google/intl/en/',
      type: 'Content',
    },
    isp: 'Google LLC',
  };

  constructor(private ipService: IpService) {}

  ngOnInit() {
    this.getIpDetail();
  }

  getIpDetail() {
    this.ipDetail = this.dummy_data;
    // this.ipService.getIpDetail(this.ipAddress).subscribe((res) => {
    //   this.ipDetail = res;
    //   this.location = res.location;
    // });
  }
  getIp(ip: string)
  {
    this.ipAddress = ip;
    this.dummy_data.ip = ip;
    this.getIpDetail();
  }
}
