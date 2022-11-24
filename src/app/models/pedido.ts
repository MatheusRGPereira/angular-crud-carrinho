import { Injectable } from "@angular/core";
import { Produto } from "./produto";

@Injectable({
    providedIn: 'root'
  })

export class Pedido {
    id!:number;
    idCliente!:number
    items!:Produto[];
    data!: Date;


    public valorTotal():Number{
      //calcular o valor do this.itens
      for(let c = 0; c < this.items.length; c++){
        
      }
      return 0;
    }
}