import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dayDate = new Date();
  user = "Mahy Pop"
  constructor() { }

  ngOnInit(): void {
  }

}
