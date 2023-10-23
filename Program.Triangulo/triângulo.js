const form = document.querySelector('form');
const resp = document.querySelector('#outRespt'); // Mudei de resp1 para resp
const inLadoA = document.querySelector('#ladoA');
const inLadoB = document.querySelector('#ladoB');
const inLadoC = document.querySelector('#ladoC');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(inLadoA.value);
    const ladoB = Number(inLadoB.value);
    const ladoC = Number(inLadoC.value);

    if ((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) {
        alert("Essas medidas não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros lados.");
        inLadoA.focus();
        inLadoB.focus();
        inLadoC.focus();
        return;
    }

    resp.innerText = 'Lados podem formar um triângulo';

    if (ladoA === ladoB && ladoA === ladoC) {
        resp.innerText = 'Tipo: Equilátero'; // resp1 para resp
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        resp.innerText = 'Tipo: Isósceles'; // resp1 para resp
    } else {
        resp.innerText = 'Tipo: Escaleno'; // resp1 para resp
    }
});
