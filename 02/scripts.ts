type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    rua: string,
    cep: string,
    bairro: string,
    cidade: string,
    estado: string
}

type TipoTransacao = Lowercase<'credito' | 'Debito'>

type NovoCarrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: TipoTransacao,
    cartao: Cartao,
    endereco: Endereco
}