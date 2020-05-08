function sacar(){
  var vstand=document.getElementById('stand')
  var res=document.getElementById('res')
  var deposito=document.createElement('input')
  deposito.setAttribute('id', 'input')
  var botao=document.createElement('button')
  botao.addEventListener('click',clicar)
  botao.setAttribute('id', 'botao')
  botao.textContent='Ok'
  res.innerHTML='Digite o valor que quer sacar:'
  res.appendChild(deposito).value
  var a=document.getElementById('input')
  
  res.appendChild(botao)
  function clicar(){
    res.innerHTML=`Você sacou R$${Number(a.value)}, então seu saldo atual é de R$${(Number(vstand.value)-Number(a.value))}<br>`
  
  
  }
}
function depositar(){
var vstand=document.getElementById('stand')
var res=document.getElementById('res')
var deposito=document.createElement('input')
deposito.setAttribute('id', 'input')
var botao=document.createElement('button')
botao.addEventListener('click',clicar)
botao.setAttribute('id', 'botao')
botao.textContent='Ok'
res.innerHTML='Digite o valor que quer depositar:'
res.appendChild(deposito).value
var a=document.getElementById('input')

res.appendChild(botao)
function clicar(){
  res.innerHTML=`Você depositou R$${Number(a.value)}, então seu saldo atual é de R$${(Number(a.value)+Number(vstand.value))}<br>`


}
}
function abrir(){
var botao1=document.createElement('button')
botao1.setAttribute('id','botao1')
botao1.textContent='Contato'
botoes.appendChild(botao1)

botoes.innerHTML += '<br>'


var botao2=document.createElement('button')
botao2.setAttribute('id','botao2')
botao2.textContent='Fale Conosco'
botoes.appendChild(botao2)

botoes.innerHTML += '<br>'


var botao3=document.createElement('button')
botao3.setAttribute('id','botao3')
botao3.textContent='Mais Testes'
botoes.appendChild(botao3)

botoes.innerHTML += '<br>';

}
function ficar(){
  botoes.innerHTML=''
}
function sair(){
  botoes.innerHTML=''
}

