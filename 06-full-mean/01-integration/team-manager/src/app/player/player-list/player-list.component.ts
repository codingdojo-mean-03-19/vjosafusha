import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';
import { GamePlayerService } from 'src/app/services/game-player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(
    private readonly playerService: PlayerService,
    private readonly gamePlayerService: GamePlayerService
  ) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayer().subscribe((response: Player[]) => {
      this.players = response;
    });
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this player?') === true) {
      this.gamePlayerService
        .getGamePlayersByPlayerId(id)
        .subscribe((response: any) => {
          if (response.length === 0) {
            this.playerService.deletePlayer(id).subscribe((player: Player) => {
              this.getPlayers();
            });
          } else {
            alert('You cannot delete!');
          }
        });
    }
  }
}
