import { Component, } from '@angular/core';
import { signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { it } from 'node:test';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = signal([
    {nome: 'Teclado Gamer', preco:49.99},
    {nome: 'Mause Gamer', preco: 29.99 },
    {nome: 'Manitor Gamer', preco: 599.99},
    {nome: 'Desktop Gamer', preco: 4999.99},
    {nome: 'Hesdset Gamer', preco: 699.99}
  ]);
  exibirProduto (nome: String){
    console.log ('Produto selecionado: ', nome);
  }
  adicionarProduto(){
    this.produtos.update(listaAtual => [
      ...listaAtual, {nome: 'sony playstation 5', preco: 5000}
    ]);
  }
   totalProdutos = computed(() => this.produtos().length); 

   valorTotal = computed (()=> {return this.produtos().reduce((total, item) => total + item.preco,0)});

   substituirProdutos() {
    this.produtos.set([
      {nome: 'Arroz Fazenda', preco: 100},
    ]);
   }
  }

