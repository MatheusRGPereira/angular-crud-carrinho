import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho/carrinho.component';
import { CarrinhoNotificacaoComponent } from './carrinho/carrinho-notificacao/carrinho-notificacao.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    CarrinhoNotificacaoComponent,
    ClienteListComponent,
    ClienteFormComponent,
    HeaderComponent,
    FooterComponent,
    ProdutoFormComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
