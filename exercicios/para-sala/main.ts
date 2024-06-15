import { Produto } from "./produtos/produto";
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface";
import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo.enum";
import { ProdutoDigital } from "./produtos/produto-digital";
import { ProdutoVariante } from "./produtos/produto-variante";

//instância de produto
const produto = new Produto("Regata", 99, "descricao regata M")
const produtoObj: ProdutoInterface = { 
    nome: "produto obj",
    descricao: "",
    preco: 0,
    tipo: ProdutoTipoEnum.FISICO

}

const produtoDigital = new ProdutoDigital("Código limpo", 90.88, "Descricao do livro")
//objeto literal de js
const display = (...produtos: ProdutoInterface[]): void => {
    console.table(produtos)
}

const regataRosa = new ProdutoVariante('Regata', 110, 'modelo primaversa-verao', 'rosa')

display(produto, produtoObj, produtoDigital, regataRosa)