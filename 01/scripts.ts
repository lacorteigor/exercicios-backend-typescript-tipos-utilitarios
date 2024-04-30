type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNascimento?: string
}

type Usuario2 = Required<Omit<Usuario, 'rg'>>;

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}