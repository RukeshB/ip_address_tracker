import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ip-search',
  templateUrl: './ip-search.component.html',
  styleUrls: ['./ip-search.component.css']
})
export class IpSearchComponent implements OnInit {
  @Output() ip = new EventEmitter<string>();

  ipAddress: string = '';
  invalidIp = false;

  constructor() { }

  ngOnInit(): void {
  }

  clearMessage(){
    this.invalidIp = false;
  }

  search(){
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this.ipAddress))
  {
    this.ip.emit(this.ipAddress);
  }
  else{
    this.invalidIp = true;
  }
    this.ipAddress = "";
  }
}
