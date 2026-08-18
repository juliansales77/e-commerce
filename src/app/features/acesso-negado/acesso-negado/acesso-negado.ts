import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../../core/facades/auth.facade';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-acesso-negado',
  imports: [RouterLink, MatAnchor],
  templateUrl: './acesso-negado.html',
  styleUrl: './acesso-negado.css',
})
export class AcessoNegado {
  private authFacade = inject(AuthFacade); //! teste em produção
  private router = inject(Router)



  sair(){
    this.authFacade.sair();
    this.router.navigateByUrl('/Login');
    return;
  } 
}