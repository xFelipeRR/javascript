function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.getElementById('res')

    if(fano.value.lenght==0 || Number(fano.value)>ano){
        alert("ERRO! COnfira os dados e tente novamente.")
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
            }else{
                //Idoso
                img.setAttribute('src','foto-idoso-m.png')
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
            }else{
                //Idosa
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero}, com ${idade} anos`
        res.appendChild(img)
    }
}