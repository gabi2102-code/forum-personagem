function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;
    let erro = document.getElementById("erro");

    if (user === "" || pass === "") {
        erro.innerText = "Preencha todos os campos!";
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "block";
    mostrar("home");
}

function mostrar(id) {
    let telas = document.querySelectorAll(".tela");

    telas.forEach(t => t.classList.remove("ativa"));

    document.getElementById(id).classList.add("ativa");
}

function enviar() {
    let texto = document.getElementById("comentario").value;

    if (texto === "") {
        alert("Digite algo!");
        return;
    }

    let p = document.createElement("p");
    p.innerText = "Você: " + texto;

    document.getElementById("lista").appendChild(p);

    document.getElementById("comentario").value = "";
}
