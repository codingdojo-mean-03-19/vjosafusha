import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }

  addTask(newTask): Observable<Task> {
    return this.http.post<Task>('/', newTask);
  }

  editTask(id: string, editTask): Observable<Task> {
    return this.http.put<Task>(`/${id}`, editTask);
  }

  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(`/${id}`);
  }
}
