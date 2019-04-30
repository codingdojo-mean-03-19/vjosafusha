import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css'],
})
export class DallasComponent implements OnInit {
  city: any;
  constructor(private httpService: WeatherService) {}

  ngOnInit() {
    const observable = this.httpService.getWeather('dallas');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
