import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // tasks is type Task, which is an array. It is set to the mock data
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
