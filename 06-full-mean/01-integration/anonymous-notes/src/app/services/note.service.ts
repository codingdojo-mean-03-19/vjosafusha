import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private readonly http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('/notes');
  }

  getNoteByID(id: string): Observable<Note> {
    return this.http.get<Note>(`${id}`);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>('/', note);
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${note._id}`, note);
  }

  deleteNote(id: String): Observable<Note> {
    return this.http.delete<Note>(`/${id}`);
  }
}
