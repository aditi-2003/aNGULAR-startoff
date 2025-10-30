import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './components/todos/todos'; 
import { ChildComponent } from './components/child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, ChildComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected readonly title = signal('cwh-to-list');
  parentMessage = 'Hello from parent!';
  onChildClick() {
  alert('Child clicked!');
}

}


