import { Component,Input,Output, EventEmitter } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {

  //entrada de dados de lista-produto.ts
 @Input() nome: string = '';
 @Input() preco: number = 0;

 //saida de dados de produto selecionados para produto.ts 
 @Output() produtoSelecionado = new EventEmitter<String>();
 selecionadoProduto()  {
  this.produtoSelecionado.emit(this.nome);
 }
}
