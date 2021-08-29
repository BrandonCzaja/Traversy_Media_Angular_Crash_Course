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

  // The function calls deleteTask from task.service.ts to delete from the server, then filters the UI
  // Think of the subscribe as a .then()
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    // Set reminder to the opposite it is at event trigger
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
