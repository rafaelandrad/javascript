function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //manhã
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#FAEBB5'
    }
    else if (hora >= 12 && hora < 18) {
        //tarde
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#6B2203'
    }
    else {
        //noite
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#282933'
    }
}
