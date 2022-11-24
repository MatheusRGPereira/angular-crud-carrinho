import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho/carrinho.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';

const routes: Routes = [
  {path: '', component: ProdutoListComponent},
  {path: 'table', component: ProdutoListComponent},
  {path: 'client-list', component: ClienteListComponent},
  {path: 'client-alterar', component: ClienteFormComponent},
  {path: 'client-alterar/:id', component: ClienteFormComponent},
  {path: 'formulario', component: ProdutoFormComponent},
  { path: 'form-alterar/:id', component: ProdutoFormComponent },
  { path: 'carrinho', component: CarrinhoComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
