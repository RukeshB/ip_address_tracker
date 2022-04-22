import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IpDetail{
  ip :string;
  location: Location;
  domain: string[];
  as: As;
  isp: string;
}

export interface As {
  asn: number,
  name: string,
  route: string,
  domain: string,
  type: string
}

export interface Location{
  country: string;
  region: string,
  city: string,
  lat: number,
  lng: number,
  postalCode: string,
  timezone: string,
  geonameId: number
}

@Injectable({
  providedIn: 'root'
})
export class IpService {

  url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_ZoR6le3sSyniFvDOeMHC04hHjZxh7&ipAddress=120.89.124.133";
  constructor(private http: HttpClient) { }

  getIpDetail():Observable<IpDetail>{
    return this.http.get<IpDetail>(this.url);
  }
}
