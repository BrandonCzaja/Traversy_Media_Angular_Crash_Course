import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'; // Interface
import { TaskService } from '../../services/task.service'; // To use getTasks()

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // tasks is type Task, which is an array.
  tasks: Task[] = [];

  // Enables this.taskService.<whatever_I_have_in_TaskService> (ie getTasks())
  constructor(private taskService: TaskService) {}

  // .subscribe is kind of like a promise in JS.
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
