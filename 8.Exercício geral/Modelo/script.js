let num=document.getElementById('fnum')
let lista=document.getElementById('flista')
let res=document.getElementById('res')
let valores=[]

function isNumero(n){
    if(Number(n)>= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
    function inLista(n, l){
        if(l.indexOf(Number(n))!= -1){
            return true
        }else{
            return false
        }
    }

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        var item=document.createElement('option')
        item.text=`Foi adicionado o valor ${num.value}`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        alert('Valor inválido ou já foi adicionado na lista!')
    }
    num.value=''
    num.focus()
    }
    function verificar(){
        if(valores.length==0){
            alert('Digite um valor!')
        } else{
        let maior=valores[0]
        let menor=valores[0]
        let soma=0
        let media=0
        for(let pos in valores){
        soma+=valores[pos]
        media=soma/valores.length
        if(valores[pos] > maior)
            maior=valores[pos]
        if(valores[pos] < menor)
            menor=valores[pos]
        }
        res.innerHTML=''
        res.innerHTML+=`<p>Foram adicionados ${valores.length} valores</p>`
        res.innerHTML+=`<p>O maior valor adicionado é ${maior}</p>`
        res.innerHTML+=`<p>O menor valor adicionado é ${menor}</p>`
        res.innerHTML+=`<p>A soma dos valores adicionados é ${soma}</p>`
        res.innerHTML+=`<p>A media dos valores adicionados é ${media}</p>`
    }
}
    
   

    