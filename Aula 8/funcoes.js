function CadastrarClientes(){
    let nome, telefone, email, linhaCliente;

    nome = document.querySelector("#nome").value;
    telefone = document.querySelector("#telefone").value;
    email = document.querySelector("#email").value;
 
    linhaCliente = "<tr><td>" + nome + "</td><td>" + telefone +  "</td><td>"+  email + "</td></tr>";

    document.querySelector(".lista-clientes"). innerHTML += linhaCliente;


    LimparCampos();

    document.querySelector(".mensagem").innerHTML= "<em>Cliente cadastrado com sucesso</em>";
}

function  LimparCampos(){
    document.querySelector("#nome").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#email").value = "";

}



/*query = seletor de pesquisa 
#nome = o # serve para puxar um ID 
.lista-clientes = . serve para puxar uma class*/