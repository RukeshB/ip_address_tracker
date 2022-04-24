import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-detail',
  templateUrl: './ip-detail.component.html',
  styleUrls: ['./ip-detail.component.css']
})
export class IpDetailComponent implements OnInit {

  @Input() ipDetail;
  constructor() { }

  ngOnInit(): void {
  }

}
