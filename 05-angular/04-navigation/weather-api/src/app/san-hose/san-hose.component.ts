import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-san-hose',
  templateUrl: './san-hose.component.html',
  styleUrls: ['./san-hose.component.css'],
})
export class SanHoseComponent implements OnInit {
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
