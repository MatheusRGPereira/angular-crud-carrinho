import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})


export class ClienteService {

  apiUrl = environment.apiUrl
  
  constructor(private http:HttpClient) { }

    public async getAll(): Promise<Cliente[]>{
      let clientes:Cliente[] = await firstValueFrom(this.http.get<Cliente[]>(`${this.apiUrl}/clientes`))
      return clientes
    }
  
    public async post(cliente:Cliente): Promise<Cliente>{
      let clienteRest:Cliente = await firstValueFrom(this.http.post<Cliente>(`${this.apiUrl}/clientes/`, cliente))
      return clienteRest
    }

    public async put(cliente:Cliente): Promise<Cliente>{
      let clienteRest:Cliente = await firstValueFrom(this.http.put<Cliente>(`${this.apiUrl}/clientes/${cliente.id}`,cliente))
      return clienteRest
    }

    public async getById(id:number): Promise<Cliente>{
      return await firstValueFrom(this.http.get<Cliente>(`${this.apiUrl}/clientes/${id}`))
    }

    public deleteClienteById(id: Number){
      firstValueFrom(this.http.delete(`${this.apiUrl}/clientes/${id}`))
    }
}