var agora = new Date()
var hora=agora.getHours()

if(hora<12) {
    console.log(`São ${hora} horas agora`)
    console.log('Bom dia!')
} else if(hora<18) {
    console.log(`São ${hora} horas agora`)
    console.log('Boa Tarde!')
}else if(hora<24) {
    console.log(`São ${hora} horas agora`)
    console.log('Boa noite!')
}else if(hora<6) {
    console.log(`São ${hora} horas agora`)
    console.log('Boa Tarde!')
}
