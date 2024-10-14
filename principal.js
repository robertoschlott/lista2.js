function Exercicio1(str) {
    const sanitizedStr = str.replace(/\s+/g, '');
    return sanitizedStr.length;
}

function Exercicio2(str) {
    const sanitizedStr = str.replace(/\s+/g, '').toLowerCase();
    
    const reversedStr = sanitizedStr.split('').reverse().join('');
    
    return sanitizedStr === reversedStr;
}

function Exercicio3(str) {
    const vogais = 'aeiouáéíóúãâêîôû';
    let contadorVogais = 0;
    let contadorConsoantes = 0;

    const sanitizedStr = str.toLowerCase().replace(/\s+/g, '');

    for (let char of sanitizedStr) {
        if (/[a-záéíóúãâêîôû]/.test(char)) {
            if (vogais.includes(char)) {
                contadorVogais++;
            } else {
                contadorConsoantes++;
            }
        }
    }

    return {
        vogais: contadorVogais,
        consoantes: contadorConsoantes
    };
}

function Exercicio4(str, charOriginal, charNovo) {
    if (charOriginal.length !== 1) {
        throw new Error("O primeiro caractere deve ser um único caractere.");
    }
    
    const regex = new RegExp(charOriginal, 'g');
    return str.replace(regex, charNovo);
}


function Exercicio5(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

function Exercicio6(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === numero) {
                return true;
            }
        }
    }
    return false; 
}

function Exercicio7(matriz) {
    if (matriz.length === 0 || matriz.length !== matriz[0].length) {
        console.log("A matriz não é quadrada.");
        return;
    }

    console.log("Elementos da diagonal principal:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i][i]); 
    }
}

