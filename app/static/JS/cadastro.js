const senha = document.getElementById("senha");
const confirmar = document.getElementById("confirmarSenha");

const btnSenha = document.getElementById("mostrarSenha");
const btnConfirmar = document.getElementById("mostrarConfirmar");

btnSenha.onclick = () => {

    senha.type = senha.type === "password" ? "text" : "password";
    btnSenha.innerHTML = senha.type === "password" ? "👁" : "🙈";

}

btnConfirmar.onclick = () => {

    confirmar.type = confirmar.type === "password" ? "text" : "password";
    btnConfirmar.innerHTML = confirmar.type === "password" ? "👁" : "🙈";

}

document.querySelector("form").addEventListener("submit", function(e){

    if(senha.value !== confirmar.value){

        e.preventDefault();

        alert("As senhas não coincidem.");

    }

});