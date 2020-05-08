function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.getElementById('res')

    if(fano.value.lenght==0 || Number(fano.value)>ano){
        alert("ERRO! Confira os dados e tente novamente.")
    }
    else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano-Number(fano.value)    
        genero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade>=10 && idade<21){
                //Jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade>21 && idade<60){
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else if(idade>60 && idade<100){
                //Idoso
                img.setAttribute('src','foto-idoso-m.png')
            }else{
                img.setAttribute('src','rip.png')
            }
        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade>=10 && idade<21){
                //Adulta
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade>=21 && idade<60){
                img.setAttribute('src','foto-adulto-f.png')
            }else if(idade>60 && idade<100){
                //Idosa
                img.setAttribute('src','foto-idoso-f.png')
            }else{
                img.setAttribute('src','rip.png')
            }
            }else if(fsex[2].checked){
            genero='Um pneu queimado'
            if(idade>0 && idade <12){
                img.setAttribute('src','n-bebe.png')
            }else if(idade>12 && idade<25){
                img.setAttribute('src','negoney.png')
            }else if(idade>25 && idade<60){
                img.setAttribute('src','n-adulto.png')
            }else if(idade>60 && idade<100){
                img.setAttribute('src','n-idoso.png')
            }else{
                img.setAttribute('src','n-cova.png')
            }
        }else if(fsex[3].checked){
            genero='Um filha da puta que transmitiu corona'
            if(idade>0 && idade <12){
                img.setAttribute('src','c-bebe.png')
            }else if(idade>12 && idade<25){
                img.setAttribute('src','c-jovem.png')
            }else if(idade>25 && idade<60){
                img.setAttribute('src','c-adulto.png')
            }else if(idade>60 && idade<100){
                img.setAttribute('src','c-idoso.png')
            }else{
                img.setAttribute('src','rip.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero}, com ${idade} anos`
        res.appendChild(img)
    }
}