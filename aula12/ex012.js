var horagora = new Date()
var hora = horagora.getHours()
if (hora < 12) {
    console.log(`São ${hora} horas, bom dia!`)
}
else if (hora < 18) {
    console.log(`São ${hora} horas, boa tarde!`)
}
else {
    console.log(`São ${hora} horas, boa noite!`)
}
