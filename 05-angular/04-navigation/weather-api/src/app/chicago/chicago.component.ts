import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
})
export class ChicagoComponent implements OnInit {
  city: any;
  constructor(private httpService: WeatherService) {}

  ngOnInit() {
    const observable = this.httpService.getWeather('sanjose');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
