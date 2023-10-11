// Obtenha as referências dos elementos de entrada no formulário
const velocidadePermitidaInput = document.getElementById('velocidadePermitida');
const velocidadeCondutorInput = document.getElementById('velocidadeCondutor');
const resultadoOutput = document.querySelector('h3');

// Adicione um ouvinte de evento para o formulário ser enviado
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores de velocidade do formulário
    const velocidadePermitida = parseFloat(velocidadePermitidaInput.value);
    const velocidadeCondutor = parseFloat(velocidadeCondutorInput.value);

    
    // Verifique a velocidade do condutor em relação à velocidade permitida
    if (velocidadeCondutor <= velocidadePermitida) {
        resultadoOutput.textContent = 'Dentro do limite de velocidade. Dirija com segurança!';
    } else {
        resultadoOutput.textContent = 'Você está acima do limite de velocidade. Tenha cuidado!';
    }
});
