const form =  document.querySelector('form');
const form = document.querySelector('#outRespt');
const form = document.querySelector('#outRespt');
const form = document.querySelector('#inLadoA');
const form = document.querySelector('#inLadoB');
const form = document.querySelector('#inLadoC');


//ouvinte
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(Form.inLadoA.value)
    const ladoB =  Number(Form.inLadoB.value)
    const ladoC =  Number(Form.inLadoC.value)

if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA  + ladoB)){
    alert("Essas medidas não podem formar em triângulo. Um dos lados não pode ser maior que a soma dos outros lados.")
    form.inLadoA.focus()
    form.inLadoB.focus()
    form.inLadoC.focus()
    return 
}

resp.innerText = 'Lados podem formar um triângulo'

if(ladoA == ladoB && ladoA == ladoC){
    resp1.innerText = 'Tipo: Equilátero'
} else if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
    resp1.innerText = 'Tipo: Isócelos'
} else{
    resp1.innerText = 'Tipo: Escaleno'
}
})