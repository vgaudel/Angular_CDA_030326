import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Basic } from './basic/basic';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Basic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'my-app';
}
