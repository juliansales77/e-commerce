import { Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { computed } from "@angular/core";

export class CarrinhoService {
    //! estado global
    private carrinho = signal<{nome: string; preco: number}[]>([]);
    
    itens = computed(() => this.carrinho());
    quantidadeItens = computed(() => this.carrinho(). length);
    totalItens = computed(() => 
       this.carrinho().reduce((total, item) => total + item.preco,0)
);

adicionar(produto: {nome: string; preco: number}){
    this.carrinho.update(lista => [ ...lista, produto]);
}
limpar() {
    this.carrinho.set([]);
}
}