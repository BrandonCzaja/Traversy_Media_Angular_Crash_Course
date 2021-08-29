import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // You should add data type to your properties
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  // In order to use a Service it has to be added to the constructor
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  // Lifecycle method - Similar to useEffect()
  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask(); // Calls toggleAddTask() from ui.service.ts
  }
}

/*
-- This is what the file looks like upon generation -- 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */
