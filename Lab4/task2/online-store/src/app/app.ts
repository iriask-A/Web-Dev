import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // This line is the fix!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}