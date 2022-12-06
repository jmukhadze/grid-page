import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../common/services/todo.service";
import {ITodo} from "../../common/interfaces/todo.intarface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todos: ITodo[]=[]

  constructor(
    private todoService:TodoService,
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }
getTodos(){
    this.todoService.getTodos().subscribe((res )=>{
this.todos=res;
    });
}}
