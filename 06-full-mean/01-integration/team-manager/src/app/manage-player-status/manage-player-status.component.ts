import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { GamePlayerService } from '../services/game-player.service';
import { Game } from '../models/game';
import { GamePlayer } from '../models/gamePlayer';

@Component({
  selector: 'app-manage-player-status',
  templateUrl: './manage-player-status.component.html',
  styleUrls: ['./manage-player-status.component.css'],
})
export class ManagePlayerStatusComponent implements OnInit {
  games: Game[];
  gamePlayers: any;
  gamePlayer: GamePlayer;

  constructor(
    private readonly gameService: GameService,
    private gamePlayerService: GamePlayerService
  ) {}

  ngOnInit() {
    this.getGames();
    this.getPlayerGames('5cd33e5d4c3dd04f786a80ae');
  }

  getGames() {
    this.gameService
      .getGames()
      .subscribe((response: Game[]) => (this.games = response));
  }

  getPlayerGames(gameId: string) {
    this.gamePlayerService
      .getGamePlayersByID(gameId)
      .subscribe((response: any) => {
        this.gamePlayers = response;
      });
  }

  changeStatus(id: string, gameID: string, status: string) {
    this.gamePlayerService
      .getGamePlayerByID(id)
      .subscribe((response: GamePlayer) => {
        this.gamePlayer = response;
        this.gamePlayer.status = status;
        this.gamePlayerService.editGamePlayer(this.gamePlayer).subscribe(() => {
          this.getPlayerGames(gameID);
        });
      });
  }
}
