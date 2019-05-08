import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css'],
})
export class PlayerAddComponent implements OnInit {
  playerForm: FormGroup;
  player: Player;
  submitted = false;

  constructor(
    private readonly playerService: PlayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.playerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      position: new FormControl(''),
    });
  }

  get name() {
    {
      return this.playerForm.get('name');
    }
  }

  onSubmit(data) {
    this.submitted = true;
    if (this.playerForm.invalid) {
      return;
    } else {
      this.player = data;
      console.log(this.player);
      this.playerService.createPlayer(this.player).subscribe(response => {
        this.router.navigate(['players/list']);
      });
    }
  }
}
