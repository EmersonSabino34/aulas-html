function validar(){
    /** pega os dados campos */ 
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    
    /** verifica se os campos estão vazios */
    if(!nome){
        alert("Preencha o campo nome!");
        return false;
    }
    if(!email){
        alert("Preencha o campo email!");
        return false;
    }
    if(senha == ""){
        alert("Preencha o campo senha!");
        return false;
    }

    login(); // chamando a função login
}

function login(){
    
    /** redireciona para a página dashboard */
    location.href = "dashboard.html";
}

// chama a função criada para validar o formulário
document.getElementById("entrar")
    .addEventListener("click",  (e) => {
    e.preventDefault()
    validar();
})

document.getElementById("cadastro")
    .addEventListener("click",  (e) => {
    e.preventDefault()
    validar();
})