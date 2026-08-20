import { Component, inject, } from '@angular/core';
import { signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { error } from 'console';
import { produtoService } from '../../../core/services/produtos.service';
import { Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { AuthFacade } from '../../../core/facades/auth.facade';
import { ItemCarrinho } from '../../../core/models/item-carrinho';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe, MatButtonModule, MatCardModule],
  templateUrl: '../lista-produtos/lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

produtos = signal <
{nome: string; preco: number } []> ([]);

  carregando = signal(true);
  //! cria o método para requisição dos produto
  carregarProduto(){
   this.carregando.set(true)
   this.erro.set(null);

   this.produtosService.buscarProdutos().subscribe({
    next: (dados) => {
      const produtos = this.produtosService.transformarProdutos(dados);
      this.produtos.set(produtos);
      this.carregando.set(false);
    },
error: (erro) => {
  console.error('erro ao carregar os  produtos:, ', erro);
  this.erro.set('Erro ao carregar os Produtos. verifique sua conexão e tente novamente')
  this.carregando.set(false);
      },
   });
  }

  exibirProduto (nome: string){
    console.log ('Produto selecionado: ', nome); 
    this.produtoSelecionado.set(nome);
  }
  adicionarProduto(){
    this.produtos.update(listaAtual => [
      ...listaAtual, {nome: 'Processador core i5 15550FS', preco: 2500}
    ]);
  }
   totalProdutos = computed(() => this.produtos().length); 

   valorTotal = computed (()=> {return this.produtos().reduce((total, item) => total + item.preco,0)});

   substituirProdutos() {
    this.produtos.set([
      {nome: 'Teclado', preco: 40},
      {nome: 'Mouse', preco: 10},
      {nome: 'Monitor', preco: 100},
      {nome: 'Desktop', preco : 500},
      {nome: 'Hesdset', preco: 25},
    ]);
   }
   constructor(){
    this.carregarProduto();

    effect(() => {
      console.log('Lista de Produtos Alterados: ', this.produtos());
    });
    effect(() => {
      console.log('Valor total atualizado: ', this.valorTotal());
    });
    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
      }
    });
   }
   produtoSelecionado = signal <string | null> (null);

  carrinho = signal <{nome: string; preco: number}[]> ([]);

  erro = signal <string | null> (null);

  
   adicionarAoCarrinho (produto: ItemCarrinho){
    this.carrinhoFacade.adicionarProdutoCarrinho(produto);
   }

private produtosService = inject(produtoService);
public carrinhoFacade = inject(CarrinhoFacade);

quantidadeCarrinho = this.carrinhoFacade.quantidadeCarrinho;
totalCarrinho = this.carrinhoFacade.totalCarrinho;

}

  