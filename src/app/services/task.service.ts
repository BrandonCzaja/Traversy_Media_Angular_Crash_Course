import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // This is an included part of Angular
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // API Url
  private apiUrl = 'http://localhost:5000/tasks';

  // the param allows for this.http
  constructor(private http: HttpClient) {}

  // to fix the "not observable" error I have to use the <> after get
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
