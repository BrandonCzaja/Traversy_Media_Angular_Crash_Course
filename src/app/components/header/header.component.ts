import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // You should add data type to your properties
  title: string = 'Task Tracker';

  constructor() {}

  // Lifecycle method - Similar to useEffect()
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
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
