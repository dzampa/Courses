import { Component, OnInit } from '@angular/core';

declare function menuCont(): any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    menuCont();
  }

}
