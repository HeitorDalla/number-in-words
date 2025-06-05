"use strict";

document.querySelector("#btnConverter").addEventListener("click", (e) => {
    e.preventDefault();

    const resposta = document.querySelector("#resposta");
    const input = document.querySelector("#numero");
    const inputValue = parseFloat(input.value);

    if (isNaN(inputValue)) {
        resposta.textContent = `Número inválido!`;
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
    
    resposta.textContent = numeroExtenso;
    resposta.className = 'sucesso';
})