import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buscador } from './components/buscador/buscador';
import { Content } from './components/content/content';
import { Logo } from './components/logo/logo';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Logo,
    Buscador,
    Sidebar,
    Content
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'taller4';
}