//CRIA REFERÊNCIA AO FORM E ELEMENTOS DE RESPOSTA DO PROGRAMA

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//CRIA UM OUVINTE

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const nome = form.inNome.value  //OBTÉM O NOME
    const nota1 = Nunber(form.inNota1.value)  //OBTÉM A PRIMEIRA NOTA
    const nota2 = Nunber(form.inNota2.value)  //
    const media = (nota1 + nota2)/2 //
    resp1.innerText = `Media das Notas ${media.toFixed(2)}`
})

if(media >= 7){
    resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
    resp2.style.color = "blue"
} else if(media >= 4){
    resp2.innerText = `Atenção`//falta terminar