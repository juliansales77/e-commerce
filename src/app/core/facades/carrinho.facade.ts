import { Injectable, inject } from "@angular/core";
import { CarrinhoService } from "../services/carrinho.service";
import { ItemCarrinho } from "../models/item-carrinho";


@Injectable({providedIn: 'root'})

export class CarrinhoFacade {
    itensCarrinho() {
      throw new Error('Method not implemented.');
    }

    private carrinhoService = inject(CarrinhoService);

    itens = this.carrinhoService.itens;
    quantidadeCarrinho = this.carrinhoService.quantidadeItens;
    totalCarrinho = this.carrinhoService.totalItens;
    carrinhoVazio   = this.carrinhoService.carrinhoVazio;

    adicionarProdutoCarrinho(produto: ItemCarrinho){
        this.carrinhoService.adicionar(produto);
    }
    limpaCarrinho(){
        this.carrinhoService.limpar();
   
    }
    removerItem(rmvItem:number){
        this.carrinhoService.removerItem(rmvItem);
    }
}