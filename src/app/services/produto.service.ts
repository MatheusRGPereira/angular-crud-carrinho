import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

    
  static buscaProdutoPorId(id: Number): Produto {
    let produtos: Produto = {} as Produto

    for (let i = 0; i < ProdutoService.produtos.length; i++) {
        let produtoDb = ProdutoService.produtos[i]
        if (produtoDb.id == id) {
            produtos = produtoDb
            break
        }
    }

    return produtos;
}

private static produtos: Produto[] = [{
    id: 1,
    nome: "Banana",
    descricao: "Nanica",
    preco: 5.50
},
{
    id: 2,
    nome: "Maça",
    descricao: "Gala",
    preco: 7.89
},{
    id: 3,
    nome: "Pitaya",
    descricao: "Colombiana  ",
    preco: 35.99
},{
    id: 4,
    nome: "Goiaba",
    descricao: "Paluma",
    preco: 12.75
},]

public static buscaProdutos(): Produto[] {
    return ProdutoService.produtos
}

public static adicionaProduto(produto: Produto): void {
    produto.id = ProdutoService.buscaProdutos().length + 1
    ProdutoService.produtos.push(produto)
}

public static alteraProduto(produto: Produto): void {
    for (let i = 0; i < ProdutoService.produtos.length; i++) {
        let produtoDb = ProdutoService.produtos[i]
        if (produtoDb.id == produto.id) {
            produtoDb = {
                ...produto
            }
            break
        }
    }
}
public static excluirProduto(produto: Produto): void {
    let listaNova = []
    for (let i = 0; i < ProdutoService.produtos.length; i++) {
        let produtoDb = ProdutoService.produtos[i]
        if (produtoDb.id != produto.id) {
            listaNova.push(produtoDb)
        }
    }

    ProdutoService.produtos = listaNova
}
}