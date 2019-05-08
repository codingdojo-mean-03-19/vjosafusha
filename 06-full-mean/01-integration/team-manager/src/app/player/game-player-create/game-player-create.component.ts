import { Component, OnInit } from '@angular/core';
import { GamePlayerService } from '../../services/game-player.service';
import { GameService } from '../../services/game.service';
import { PlayerService } from '../../services/player.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Game } from '../../models/game';
import { Player } from '../../models/player';
import { GamePlayer } from '../../models/gamePlayer/gamePlayer.model';

@Component({
  selector: 'app-game-player-create',
  templateUrl: './game-player-create.component.html',
  styleUrls: ['./game-player-create.component.css'],
})
export class GamePlayerCreateComponent implements OnInit {
  gamePlayerForm: FormGroup;
  gamePlayer: GamePlayer;
  games: Game[];
  players: Player[];

  constructor(
    private readonly gamePlayerService: GamePlayerService,
    private readonly gameService: GameService,
    private readonly playerService: PlayerService
  ) {}

  ngOnInit() {
    this.getGame();
    this.getPlayer();
    this.initForm();
  }

  initForm() {
    this.gamePlayerForm = new FormGroup({
      player: new FormControl(''),
      game: new FormControl(''),
    });
  }

  getGame() {
    this.gameService
      .getGames()
      .subscribe((response: Game[]) => (this.games = response));
    console.log(this.games);
  }

  getPlayer() {
    this.playerService
      .getPlayer()
      .subscribe((response: Player[]) => (this.players = response));
    console.log(this.players);
  }

  onSubmit(data) {
    this.gamePlayer = data;
    this.gamePlayerService
      .createGamePlayer(this.gamePlayer)
      .subscribe(response => console.log(response));
  }
}
