import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  movies = [

     'item 0',
     'item 1',
     'item 2',
     'item 3',
     'item 4',
     'item 5',
     'item 6',
     'item 7',


   ];

  drop($event) {
    moveItemInArray(this.movies, $event.previousIndex, $event.currentIndex);
  }


}
