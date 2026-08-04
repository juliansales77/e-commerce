import { Component, signal } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router';
import { login, usuarioLogado, logout } from './core/auth';
import { Header } from './shared/layout/header/header';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
 
  usuarioLogado = usuarioLogado;
  login = login
  logout = logout;
}
