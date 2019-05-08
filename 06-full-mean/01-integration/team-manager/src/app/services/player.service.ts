import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private readonly http: HttpClient) {}

  getPlayer(): Observable<Player[]> {
    return this.http.get<Player[]>('/players');
  }

  getPlayerByID(id: string): Observable<Player> {
    return this.http.get<Player>(`/${id}`);
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>('/', player);
  }

  editPlayer(editPlayer: Player): Observable<Player> {
    return this.http.put<Player>(`/${editPlayer._id}`, editPlayer);
  }

  deletePlayer(id: string): Observable<Player> {
    return this.http.delete<Player>(`/${id}`);
  }
}
