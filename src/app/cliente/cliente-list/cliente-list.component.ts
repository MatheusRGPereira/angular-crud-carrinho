import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(
    private router:Router,
    private clienteService: ClienteService,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.getClientes()
  }

  private async getClientes(){
    this.clientes = await this.clienteService.getAll();
  }
  
  public clientes:Cliente[] = []

  novo(){
    this.router.navigateByUrl("/client-alterar")
  }

 async excluir(cliente:Cliente){
  if(confirm("Confirma ?")){
    await this.clienteService.deleteClienteById(cliente.id)
    this.clientes = await this.clienteService.getAll()
  }
  }
}