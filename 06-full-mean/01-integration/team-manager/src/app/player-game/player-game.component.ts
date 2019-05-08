import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models';

@Component({
  selector: 'app-player-game',
  templateUrl: './player-game.component.html',
  styleUrls: ['./player-game.component.css'],
})
export class PlayerGameComponent implements OnInit {
  players: Player[];
  game: number;
  game1 = true;
  game2 = false;
  game3 = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }
  // whichGame(game) {
  //   if (game === 1) {
  //     this.game1 = true;
  //     this.game2 = false;
  //     this.game3 = false;
  //     return this.game1;
  //   }
  //   if (game === 2) {
  //     this.game1 = false;
  //     this.game2 = true;
  //     this.game3 = false;
  //     return this.game2;
  //   }
  //   if (game === 3) {
  //     this.game1 = false;
  //     this.game2 = false;
  //     this.game3 = true;
  //     return this.game3;
  //   }
  // }

  getPlayers() {
    this.playerService
      .getPlayer()
      .subscribe((response: Player[]) => (this.players = response));
  }
}
