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

  getAuthorByID(id: string): Observable<Author> {
    return this.http.get<Author>(`/${id}`);
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>('/', author);
  }

  editAuthor(editAuthor: Author): Observable<Author> {
    return this.http.put<Author>(`/${editAuthor._id}`, editAuthor);
  }

  deleteAuthor(id: String): Observable<Author> {
    return this.http.delete<Author>(`/${id}`);
  }
}
