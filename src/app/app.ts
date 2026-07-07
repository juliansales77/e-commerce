import { Component, signal } from '@angular/core';
//!import { RouterOutlet } from '@angular/router'; // remover impotação  routeroutlet ,pois não necessário para component
import {  Produto } from './components/produto/produto';

@Component({
  selector: 'app-root',
  imports: [ Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
