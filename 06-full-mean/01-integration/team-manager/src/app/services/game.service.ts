import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private readonly http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/games');
  }

  getGameByID(id: string): Observable<Game> {
    return this.http.get<Game>(`/games/${id}`);
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>('/games', game);
  }

  editGame(game: Game): Observable<Game> {
    return this.http.put<Game>(`/games/${game._id}`, game);
  }

  deleteGame(id: string): Observable<Game> {
    return this.http.delete<Game>(`/games/${id}`);
  }
}
