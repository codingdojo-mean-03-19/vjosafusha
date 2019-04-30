import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css'],
})
export class WashingtonComponent implements OnInit {
  constructor(private httpService: WeatherService) {}

  city: any;

  ngOnInit() {
    const observable = this.httpService.getWeather('washington');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
