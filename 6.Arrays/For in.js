console.log('Arrays')

num=[4, 5 ,6, 7]
for(let pos in num){
    console.log(`Posição do array:${pos}  Valor:${num[pos]}`)
    
}
let a=num.indexOf(7)
if(a==-1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor 8 está na posição ${a}`)
}
