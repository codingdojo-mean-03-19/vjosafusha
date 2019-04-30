import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

import { SeatleComponent } from './seatle/seatle.component';
import { SanHoseComponent } from './san-hose/san-hose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    SeatleComponent,
    SanHoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent,
  ],
  // tslint:disable-next-line: deprecation
  imports: [BrowserModule, HttpClientModule, routing],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
