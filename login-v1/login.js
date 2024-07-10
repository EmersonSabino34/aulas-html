function validar(){
    /** pega os dados campos */ 
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    
    /** verifica se os campos estão vazios */
    if(!email){
        alert("Preencha o campo email");
        return false;
    }
    if(senha == ""){
        alert("Preencha o campo senha");
        return false;
    }
    login();
}

function login(){
    /** verifica se o usuário ou senha tem permissão para entrar*/
    if( email !== "admin@gmail.com"){
        alert("E-mail não cadastrado");
    }else if(senha !== "123"){
        alert("Senha tem permissão");
    }else{
        alert("Login efetuado com sucesso");
        alert("seja bem vindo: " + email);
        // location.href = "https://www.google.com.br/";
        location.href = "dashboard.html";
    }
}
// chama a função criada para validar o formulário
document.getElementById("entrar")
    .addEventListener("click",  (e) => {
    e.preventDefault()
    validar();
})