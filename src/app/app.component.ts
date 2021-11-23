import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<any> = [];
  todoItem: string = '';


  addTodoItem() {
    if(this.todoItem !== '') {
      this.todoList.push({
        id: this.todoList.length,
        item: this.todoItem
      });
      this.todoItem = '';
    }
  }

  removeTodo(itemId: number) {
    this.todoList =  this.todoList.filter((item: any) => item.id !== itemId);
  }
}
