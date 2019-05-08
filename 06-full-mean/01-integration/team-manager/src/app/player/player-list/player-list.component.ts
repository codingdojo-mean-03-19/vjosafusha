import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(private readonly playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayer().subscribe((response: Player[]) => {
      this.players = response;
      console.log(this.players);
    });
  }

  onDelete(id: string) {
    this.playerService.deletePlayer(id).subscribe((response: Player) => {
      console.log('Removing a author', response);
      this.getPlayers();
    });
  }
}
