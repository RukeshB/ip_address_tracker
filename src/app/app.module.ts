import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { IpSearchComponent } from './ip-search/ip-search.component';
import { IpDetailComponent } from './ip-detail/ip-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    IpSearchComponent,
    IpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
