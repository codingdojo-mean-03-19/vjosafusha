import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css'],
})
export class BurbankComponent implements OnInit {
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
