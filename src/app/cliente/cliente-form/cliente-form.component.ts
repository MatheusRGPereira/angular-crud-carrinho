import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private http: HttpClient,
    private clienteService: ClienteService
  ) { }

  public titulo: String = "Novo Cliente"
  public cliente: Cliente = {} as Cliente



  ngOnInit(): void {
    let id:number = this.routerParams.snapshot.params['id']
    if (id) {
      this.atualizaCliente(id)
    }
  }
  private async atualizaCliente(id: Number){
    this.titulo = "Alterando cliente"
    this.cliente = await this.clienteService.getById(this.cliente.id)
  }


  save() {
    if (this.cliente.id > 0) {
      this.clienteService.put(this.cliente)
    } 
    else {
     this.clienteService.post(this.cliente)
    }

    this.router.navigateByUrl("/client-list")
  }

}