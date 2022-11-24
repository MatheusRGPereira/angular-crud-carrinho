import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  private static pedido:Pedido

  public static get():Pedido{
    if(!PedidoService.pedido) PedidoService.pedido = new Pedido()
    return PedidoService.pedido
  }
}
