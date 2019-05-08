import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player.service';
import { Player } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Team Manager';
}
