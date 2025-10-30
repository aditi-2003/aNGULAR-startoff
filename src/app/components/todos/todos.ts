import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class TodosComponent {
  todos = [
    { id: 1, title: 'Learn Angular basics', completed: false },
    { id: 2, title: 'Build Todo app', completed: false },
    { id: 3, title: 'Celebrate progress', completed: false }
  ];
}
