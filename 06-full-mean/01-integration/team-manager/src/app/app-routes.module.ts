import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerAddComponent } from './player/player-add/player-add.component';
import { GamePlayerCreateComponent } from './player/game-player-create/game-player-create.component';
import { ManagePlayerStatusComponent } from './manage-player-status/manage-player-status.component';

const routes: Routes = [
  {
    path: 'manage',
    component: ManagePlayerStatusComponent,
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
      {
        path: 'assignToGame',
        component: GamePlayerCreateComponent,
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
