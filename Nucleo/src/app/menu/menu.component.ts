import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private translate: AppComponent) { 

  }

  ngOnInit() {
  }

}
