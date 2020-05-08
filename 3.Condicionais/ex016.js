var hora=14

if(hora>6 && hora<13) {
    console.log(`São ${hora} horas agora`)
    console.log('Bom dia!')
} else if(hora>13 && hora<17) {
    console.log(`São ${hora} horas agora`)
    console.log('Boa Tarde!')
}else if(hora>17 && hora<24) {
    console.log(`São ${hora} horas agora`)
    console.log('Boa noite!')
}else if(hora>=24) {
    console.log(`São ${hora} horas agora`)
    console.log('Boa madrugada!')
}