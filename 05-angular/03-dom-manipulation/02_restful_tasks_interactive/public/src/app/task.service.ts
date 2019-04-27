import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private readonly http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
 }
}

