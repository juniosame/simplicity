"use strict";

// Selecionando o elemento (através de descendência) que acionará o menu
const botaoMenu = document.querySelector("nav h2");
console.log(botaoMenu);

//  Selecionando a lista/menu através da classe
const menu = document.querySelector(".menu");
console.log(menu);

// Selecionando o link que está dentro do nav h2
const textoBotao = botaoMenu.querySelector("a")
console.log(textoBotao);

botaoMenu.addEventListener("click", function(event){

    event.preventDefault(); //Anular/prevenir o comportamento do link
    menu.classList.toggle("aberto");

    if(menu.classList.contains("aberto")){
        textoBotao.innerHTML = "Fechar &times;"
    } else {

        textoBotao.innerHTML = "Menu &equiv;"
    }
});