"use strict";

document.querySelector("#btnConverter").addEventListener("click", (e) => {
    e.preventDefault();

    const containerResposta = document.querySelector("#containerResposta");
    const input = document.querySelector("#numero");
    const inputValue = parseFloat(input.value);

    if (isNaN(inputValue)) {
        containerResposta.textContent = `Número inválido!`;
        return; // Para aqui
    }

    // Usar a biblioteca Extenso.js
    const numeroExtenso = extenso(inputValue, {
        mode: 'number', // Modo: number, currency
        negative: 'informal', // Como tratar negativos
        decimal: 'formal', // Como tratar decimais
        currency: {
            type: 'BRL'
        }
    });
    
    containerResposta.textContent = numeroExtenso;
    containerResposta.className = 'sucesso';
})