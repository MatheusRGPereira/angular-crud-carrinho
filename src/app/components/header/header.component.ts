import { Component, OnInit } from '@angular/core';
import { PedidoObserverService } from 'src/app/services/pedido-observer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public pedidoObserverService: PedidoObserverService) { }

  ngOnInit(): void {
  }

}