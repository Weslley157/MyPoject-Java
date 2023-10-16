const velocidadePermitidaInput = document.getElementById('velocidadePermitida');
const velocidadeCondutorInput = document.getElementById('velocidadeCondutor');
const resultadoOutput = document.querySelector('h3');

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 

const velocidadePermitida = parseFloat(velocidadePermitidaInput.value);
const velocidadeCondutor = parseFloat(velocidadeCondutorInput.value);

    if (velocidadeCondutor <= velocidadePermitida) {
        resultadoOutput.textContent = 'Dentro do limite de velocidade. Dirija com segurança!';
    } else{
        resultadoOutput.textContent = 'Você está acima do limite de velocidade. Tenha cuidado!';
    }
});
