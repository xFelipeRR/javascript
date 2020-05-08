function tabuada(){
    var num=document.getElementById('txtn')
    var tab=document.getElementById('seltab')
    if(num.value.length==0){
        window.alert('Digite um número!')
    }else{
        var n=Number(num.value)
        var c=1
        tab.innerHTML=''
        while(c<=10){
        var item=document.createElement('option')   // Irá criar uma opção a cada vez que o teste for verdadeiro
        item.text=` ${n} X ${c} = ${n*c}`
        item.value=`tab${c}`
        tab.appendChild(item)
        c++
        }
    }
}