import { Component, } from '@angular/core';
import { signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';


@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
  templateUrl: '../lista-produtos/lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

produtos = signal <
{nome: string; preco: number } []> ([]);

  carregando = signal(true);
  //! cria o método para requisição dos produto
  carregarProduto(){
    this.carregando.set(true);
    this.http.get <{title: string; price: number}[]>
    ('https://faketoreapi.com/produtos')
    .subscribe({
      next: (dados) => {
        const produtosFormatados = dados.map(p =>({
          nome: p.title,
          preco: p.price
        }));
        this.produtos.set(produtosFormatados);
        this.carregando.set(false);
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos: ', erro);
       this.carregando.set(false);        
      }
    })
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
   constructor(private http: HttpClient){
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
  
   adicionarAoCarrinho (produto: {nome: string; preco: number }){
    this.carrinho.update(listaAtual => 
     [ ...listaAtual,produto]);
}
  
quantidadeCarrinho = computed(() => this.carrinho().length);
  totalCarrinho = computed (() => {
    return this.carrinho().reduce((total, item)=> total+item.preco,0)
  });

  }
  