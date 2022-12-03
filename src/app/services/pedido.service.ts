import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  constructor() { }
  
  pedido:Produto[] = []
  id = 0
  valorTotal: number = 0;


  public getPedido(pedido:Produto){
    this.pedido.push({...pedido, id: this.id})
    this.id++
  }

  deletaPedido(id:number, valorTotal:number){
    if(id || id == 0){
      for (let i = 0; i <= this.pedido.length; i++) {
        if(id == this.pedido[i].id){
          let resultado = this.pedido.map(res => res.id).indexOf(id)
          valorTotal -= Number(this.pedido[resultado].preco)
          this.pedido.splice(resultado,1)
          return
        }
      }
    }

}
}
