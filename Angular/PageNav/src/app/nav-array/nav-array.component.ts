import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-array',
  templateUrl: './nav-array.component.html',
  styleUrls: ['./nav-array.component.scss']
})

export class NavArrayComponent implements OnInit {

  config: any; 
  collection = [];
  masterSelected:boolean;

  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próximo',
  };

  constructor() {
    this.masterSelected = false;
    this.config = {
      id: 'custom',
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: this.collection.length
    };   

    for (let i = 1; i <= 500; i++) {
      this.collection.push(
        {
          id: i,
          name: `data ${i}`,
          isSelected: false
        }
      );
    }
  };

  ngOnInit() {
  }

  checkUncheckAll() {
    for (var i = 0; i < this.collection.length; i++) {
      this.collection[i].isSelected  = this.masterSelected;
    }
  }
  isAllSelected() {
    this.masterSelected = this.collection.every((item:any) => {
        return item.isSelected  == true;
      })
  }  

  pageChanged(event){
    this.config.currentPage = event;
  }

}
