function sacar(){
    var vstand=document.getElementById('stand').value
    var escolha=document.getElementById('escolha').value
    var res=document.getElementById('res')
    res.innerText=`💰Você sacou R$${escolha}, por isso agora o seu saldo na conta é de R$${vstand-escolha}💸`
}
function depositar(){
    var vstand=document.getElementById('stand')
    var vconta=Number(vstand.value)
    var escolha=document.getElementById('escolha')
    var vescolha=Number(escolha.value)
    var res=document.getElementById('res')
    res.innerText=`Você depositou ${vescolha} então, seu saldo atual é de ${vconta+vescolha}`
}
