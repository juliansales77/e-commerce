import { Component } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
 // produto = 'notebook';
  //preco = 5000;
  //mostrarPreco = true;
  //mostrarProduto = true;
  produtos = [
    {produto: 'Monitor', preco: 1000},
    {produto: 'Teclado', preco: 49.99},
    {produto: 'Mause', preco: 25.50}
  ];
}
