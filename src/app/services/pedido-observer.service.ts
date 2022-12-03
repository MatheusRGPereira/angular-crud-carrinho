import { Injectable } from '@angular/core';
import { PedidoService } from './pedido.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoObserverService {

  constructor(
    private pedidoService : PedidoService
  ) { }

  public quantidade: number = 0

  atualizarQuantidade(){
    console.log("Caiu aq")
    // this.quantidade = this.pedidoService.get()
  }
}
