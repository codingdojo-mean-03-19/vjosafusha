import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'restful-task';
  tasks: Task[] = [];
  newTask: any;
  editTask: any;
  editStatus: boolean;

  constructor(private readonly taskService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
    this.newTask = { title: '', description: '' };
  }
  getTasksFromService() {
    const observable = this.taskService.getTasks();
    observable.subscribe(tasks => {
      this.tasks = tasks;
      console.log('Got our data - tasks: ', tasks);
      console.log('Got our data - ', this.tasks);
      this.editStatus = false;
    });
  }

  onSubmit() {
    const obs = this.taskService.addTask(this.newTask);
    obs.subscribe(task => {
      console.log('We got our data: ', task);
      this.newTask = { title: '', description: '' };
    });
    this.getTasksFromService();
  }
  onDelete(id: string) {
    const observable = this.taskService.deleteTask(id);
    observable.subscribe(task => {
      console.log('Task has been deleted successfully.', task);
      this.getTasksFromService();
    });
  }
  onEdit(task: Task) {
    console.log(task);
    this.editTask = task;
    this.editStatus = true;
  }
  onUpdate() {
    const observable = this.taskService.editTask(
      this.editTask._id,
      this.editTask
    );
    observable.subscribe(task => {
      console.log('Task has been updated successfully.', task);
      this.getTasksFromService();
      this.editStatus = false;
    });
  }
}
