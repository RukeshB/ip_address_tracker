import { Component, OnInit } from '@angular/core';
import { IpDetail, IpService } from './ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  lat: number = 27.7172;
  lng: number = 85.324;

  ipDetail: IpDetail = {
    ip: '',
    location: null,
    domain: [],
    as: null,
    isp: ''
  }
  
  constructor(private ipService: IpService) {}

  ngOnInit() {
    this.ipService
      .getIpDetail()
      .subscribe((res) => {
        this.ipDetail = res;

        console.log(this.ipDetail);
      });
  }
}
