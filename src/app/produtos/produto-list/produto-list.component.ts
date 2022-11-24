import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { PedidoObserverService } from 'src/app/services/pedido-observer.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor(private router: Router, 
    public pedidoObserverService : PedidoObserverService,
    private pedidoService: PedidoService
    ) { }
  
  ngOnInit(): void {
  }
  
  public produtos:Produto[] = ProdutoService.buscaProdutos();


  novo(){
    this.router.navigateByUrl("/formulario")
  }

  excluir(produto: Produto){
    ProdutoService.excluirProduto(produto)
    this.produtos = ProdutoService.buscaProdutos()
  }

  adicionarProdutoCarrinho(produto: Produto){
    PedidoService.get().items.push(produto);
    this.pedidoObserverService.atualizarQuantidade();
  }
}
