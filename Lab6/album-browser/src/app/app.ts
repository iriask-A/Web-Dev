import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. Импортируй это

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // 2. Добавь сюда
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
