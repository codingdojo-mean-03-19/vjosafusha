import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerAddComponent } from './player/player-add/player-add.component';
import { PlayerGameComponent } from './player-game/player-game.component';

const routes: Routes = [
  {
    path: 'status',
    component: PlayerGameComponent,
  },
  {
    path: 'players',
    component: PlayerComponent,
    children: [
      {
        path: 'list',
        component: PlayerListComponent,
      },
      {
        path: 'add',
        component: PlayerAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
