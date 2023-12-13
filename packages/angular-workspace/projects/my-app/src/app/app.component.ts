import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentLibraryModule } from 'component-library2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ComponentLibraryModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
