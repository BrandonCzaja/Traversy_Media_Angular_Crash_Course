import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'; // Task Interface. Required for @Output EventEmitter

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // When working with forms each field needs a property
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // Emit with newTask
    this.onAddTask.emit(newTask);

    // These reset the form to blank
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
