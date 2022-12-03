import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

  pedidos: Produto[] = this.pedidoService.pedido

  valor: number = 0

  ngOnInit(): void {
    this.precoTotal()
  }

  deletarPedido(id:number, preco:number){
    this.pedidoService.deletaPedido(id,this.valor);
  }

  precoTotal(){
    for(let i = 0; i< this.pedidos.length; i++){
      this.valor += this.pedidos[i].preco
    }
  }
}
