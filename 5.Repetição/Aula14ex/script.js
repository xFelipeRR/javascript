function tabuada(){
    let ini=document.getElementById('txt1')
    let fim=document.getElementById('txt2')
    let passo=document.getElementById('txt3')
    let res=document.getElementById('res')

    if (ini.value.lenght== 0 || fim.value.lenght== 0 || passo.value.lenght== 0){
        window.alert('[ERRO], dados faltando...')
        res.innerHTML='Impossível de contar...'
    }
    else{
        res.innerHTML='Contando:<br>'
        let i=Number(ini.value)
        let f=Number(fim.value)
        let p=Number(passo.value)
    if(p<=0){
        alert('Passo inválido, considerando 1')
        p=1
    }
    if(i<f){
        //Contagem Crescente
        for(let c=i; c<=f; c += p){
            res.innerHTML+=`${c}\u{1F449}`
        }
            res.innerHTML+=`\u{1F3C1}`
    }
    else{
        //Contagem Regressiva
        for(let c=i; c>=f; c-=p){
            res.innerHTML+=`${c}\u{1F449}`
        }
            res.innerHTML+=`\u{1F3C1}`
    }
    }
}