import { Injectable } from '@angular/core';
import { PedidoService } from './pedido.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoObserverService {

  constructor() { }

  public quantidade: number = 0

  atualizarQuantidade(){
    console.log("Caiu aq")
    this.quantidade = PedidoService.get().items.length;
  }
}
