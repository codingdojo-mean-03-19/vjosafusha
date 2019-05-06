import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Here are your tasks:';
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private readonly httpService: HttpService) {
    // this.getTasksFromService();
  }

  getTasksFromService() {
    const observable = this.httpService.getTasks();
    observable.subscribe(tasks => {
      this.tasks = tasks;
      console.log('Got our data - tasks: ', tasks);
      console.log('Got our data - ', this.tasks);
    });
  }

  showOne(id: string): void {
    const obs = this.httpService.showTask(id);
    obs.subscribe(task => {
      console.log('Got our data: ', task);
      this.selectedTask = task;
    });
  }
}
