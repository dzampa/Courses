import { Component, OnInit } from '@angular/core';

declare function menuExp(): any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    menuExp();
  }

}
