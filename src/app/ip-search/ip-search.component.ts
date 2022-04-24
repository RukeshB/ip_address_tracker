import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ip-search',
  templateUrl: './ip-search.component.html',
  styleUrls: ['./ip-search.component.css']
})
export class IpSearchComponent implements OnInit {
  @Output() ip = new EventEmitter<string>();

  ipAddress: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.ip.emit(this.ipAddress);

  }
}
