import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamePlayer } from '../models/gamePlayer/gamePlayer.model';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GamePlayerService {
  constructor(private readonly http: HttpClient) {}

  getGamesPlayer(): Observable<any> {
    return this.http.get('/gamePlayers');
  }
  getGamePlayerByID(id: string): Observable<GamePlayer> {
    return this.http.get<GamePlayer>(`/gamePlayers/${id}`);
  }

  editGamePlayer(gamePlayer: GamePlayer): Observable<GamePlayer> {
    return this.http.put<GamePlayer>(
      `/gamePlayers/${gamePlayer._id}`,
      gamePlayer
    );
  }

  createGamePlayer(gamePlayer: GamePlayer): Observable<GamePlayer> {
    return this.http.post<GamePlayer>('/gamePlayers', gamePlayer);
  }

  getGamePlayersByID(id: string): Observable<any> {
    return this.http.get(`/gamePlayers/${id}/players`);
  }
}
