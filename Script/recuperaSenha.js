function enviaSenha(email) {

  // busca os acarateres @  e . no email
  const email3 = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;
  console.log(email3.test(email))
  // testa  se email é valido
  if (!email3.test(email)) {

      alert("O email não é valido, digite novamente")
      location.href = "./passwordRecovery.html"
  } else {
      alert("Enviamos uma nova senha em seu e-mail!")
      location.href = "../index.html"
  }
}

$("#passwordRecovery").on("submit", function (event) {
  event.preventDefault()
})

// busca elemento botão  e passa valor  do imput para função  validaEntrada
const enviarSenha = document.getElementById('button')
enviarSenha.addEventListener('click', function () {
  let emailTxt = document.getElementById('emailTxtSenha').value;
  enviaSenha(emailTxt)
  console.log(emailTxt)
})
