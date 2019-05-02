import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private readonly http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('/tasks');
  }

  editAuthor(id: String, editAuthor): Observable<Author> {
    return this.http.put<Author>(`/${id}`, editAuthor);
  }

  deleteAuthor(id: String): Observable<Author> {
    return this.http.delete<Author>(`/${id}`);
  }
}
