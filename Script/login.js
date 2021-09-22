
// função que valida se o email é verdadadeiro
function validaEntrada(email) {

    // busca os acarateres @  e . no email
    const email2 = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;
    console.log(email2.test(email))
    // testa  se email é valido
    if (!email2.test(email)) {

        alert("O email não é valido")
        location.href = "./login.html"
        throw new RangeError('As senhas não conferem')
    } else {

        location.href = "../index.html"
    }
}

// remove evento submit do form
$(".login").on("submit", function (event) {
    event.preventDefault()
})

// busca elemento botão  e passa valor  do imput para função  validaEntrada
const buscarEmail = document.getElementById('loginUserBtn')
buscarEmail.addEventListener('click', function () {
    let emailTxt = document.getElementById('loginUser').value;
    validaEntrada(emailTxt)
    console.log(emailTxt)
})






