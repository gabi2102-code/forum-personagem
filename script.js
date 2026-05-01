const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    let acessoLiberado = true;

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if(nome.trim() === ""){
        alert(" Digite seu nome ");
        acessoLiberado = false;
    }

    if(senha.trim() === ""){
        alert("Digite a senha para continuar a aventura");
        acessoLiberado = false;
    }

    if(nome !== "dora"){
        alert("Usuário não reconhecido!");
        acessoLiberado = false;
    }

    if(senha !== "1234"){
        alert("Senha incorreta!");
        acessoLiberado = false;
    }

    if(acessoLiberado){
        alert("Vamos explorar!");
        window.location.href = "home.html";
    }
});

