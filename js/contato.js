"use strict";

/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagem = formulario.querySelector("#status");

// Detectando o evento de CLICK no botão buscar
botaoBuscar.addEventListener("click", async function(event){
    event.preventDefault();

    let cep; // undefined

    /* Verficando se o cep NÃo tem 8 dígitos
    O operador !== significa "diferente de". */
    if(campoCep.value.length !==8){
        mensagem.textContent = "CEP Inválido!";
        mensagem.style.color = "red";
        
        // Pare a
        return;
    } else {
        // Caso contrário (ou seja, tem 8 dígitos), guarde o valor
        cep = campoCep.value;
    }


    /* AJAX -> Técnica de comunicação assícrona para acessar uma API (www.viacep.com.br) */

    // Etapa 1: preparar a URL da API com o CEP DIGITADP
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    // Etapa 2: acessar a API (com a URL) e aguardar o retorno dela
    const resposta = await fetch(url);

    // Etapa 3: extrair os dados da resposta em formato JSON
    const dados = await resposta.json();

    // Etapa 4: lidar com os dados de resposta (em caso de erro ou sucesso)
    if("erro" in dados){
        mensagem.textContent = "CEP inexistente!";
        mensagem.style.color = "orange";
    } else {
        mensagem.textContent = "CEP encontrado!";
        mensagem.style.color = "green";
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;


        
    }

});