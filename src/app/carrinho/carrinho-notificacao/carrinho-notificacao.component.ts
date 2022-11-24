import { Component, OnInit } from '@angular/core';
import { PedidoObserverService } from 'src/app/services/pedido-observer.service';

@Component({
  selector: 'app-carrinho-notificacao',
  templateUrl: './carrinho-notificacao.component.html',
  styleUrls: ['./carrinho-notificacao.component.css']
})
export class CarrinhoNotificacaoComponent implements OnInit {

  constructor(public pedidoObserverService : PedidoObserverService) { }

  ngOnInit(): void {
  }

}
