import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'; // Task Interface. Required for @Output EventEmitter
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

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
  showAddTask: boolean;
  subscription: Subscription;

  // If you want any other component to respond to the toggle you need to add this constructor, along with the imports and showAddTask + subscription properties to those components
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

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
