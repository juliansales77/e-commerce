import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router'; 
import { inject } from '@angular/core';
import { CarrinhoService } from '../../../core/services/carrinho.service';
import { UpperCasePipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, RouterLink, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
estaLogado() {
throw new Error('Method not implemented.');
}  
loja = 'Full stack Store';
private  CarrinhoService = inject (CarrinhoService)
quantidade = this.CarrinhoService.quantidadeItens;
private authService = inject(AuthService)
usuarioLogado = this.authService.usuarioLogado;
usuarioAtual = this.authService.usuarioAtual ;
  router: any;

sair() {
this.authService.logout();
this.router.navigateByUrl('/login');
}
}
