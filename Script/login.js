class validaEmail {
    static email2 = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;

    constructor(email) {

        this.validaEntrada(email)
        this.email = email,


        
    }
    validaEntrada(email) {
        email2.test(email)
        console.log(email2)
        if (email !== confirmaSenha) {
            // devover o texto do input com as senhas que não conferem
            alert('As senhas não conferem')
            throw new RangeError('As senhas não conferem')
        } else {

        } return
    }

    btnsalvar = document.getElementById('login')
    if(btnsalvar) {
        btnsalvar.addEventListener('click', (event) => {

            const emailTxt = document.getElementById('loginUser').value;
            const novoUser = new validaEmail(emailTxt)
        })

    }

}