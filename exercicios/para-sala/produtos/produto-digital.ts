import { ProdutoTipoEnum } from "./enums/produto-tipo.enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

//verbosa: insere as informações de forma granular
//resumida: insere as informações direito
/*
export class Produto implements ProdutoInterface {
    nome: string;
    preco: number;
    descricao: string;

    constructor(nome: string, preco: number, descricao: string) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}*/

export class ProdutoDigital implements ProdutoInterface {
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.DIGITAL
    constructor(public nome: string, public preco: number, public descricao: string) {}
}