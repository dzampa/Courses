import { Component, OnInit } from '@angular/core';

declare function menuClie(): any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    menuClie();
  }

}
