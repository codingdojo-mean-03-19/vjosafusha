import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-seatle',
  templateUrl: './seatle.component.html',
  styleUrls: ['./seatle.component.css'],
})
export class SeatleComponent implements OnInit {
  constructor(private httpService: WeatherService) {}

  city: any;

  ngOnInit() {
    const observable = this.httpService.getWeather('seattle');
    observable.subscribe(data => {
      this.city = data as any;
      console.log(this.city);
    });
  }
}
