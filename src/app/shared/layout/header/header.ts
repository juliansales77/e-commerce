import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthFacade } from '../../../core/facades/auth.facade';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatToolbarModule, RouterLink, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Full Stack Store';
  
  private carrinhoService = inject(CarrinhoFacade);
  quantidade = this.carrinhoService.quantidadeCarrinho;
  
  private authService = inject(AuthFacade)
  usuarioLogado = this.authService.usuarioLogado;
  usuarioAtual = this.authService.usuarioAtual;
  
  private router = inject(Router)
  
  sair(){
    this.authService.sair();
    this.router.navigateByUrl('/login')
  }
}