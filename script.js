// Menu para telas pequenas

const menu = document.querySelector("nav ul");

function mostrarMenu() {
    menu.classList.toggle("mostrar");
}


// Modo escuro

const botaoTema = document.createElement("button");

botaoTema.textContent = "Modo escuro";
botaoTema.classList.add("botao-tema");

document.querySelector("nav").appendChild(botaoTema);

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botaoTema.textContent = "Modo claro";
    } else {
        botaoTema.textContent = "Modo escuro";
    }
});


// Mensagem no console

console.log("Portfólio de Járcia Nércia carregado com sucesso.");
