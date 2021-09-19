class CadastroLogin {


    static novoId = 1
    constructor(nome, rg, email, senha, cep, estado, cidade, rua, bairro, numero, complemento) {

        
        this.validaSenha(senha, senha)

        this.id = CadastroLogin.novoId++,
            this.nome = nome,
            this.rg = rg,
            this.email = email,
            this.senha = senha,
            this.cep = cep,
            this.estado = estado,
            this.cidade = cidade,
            this.rua = rua,
            this.bairro = bairro,
            this.numero = numero,
            this.complemento = complemento
    }


    validaSenha(senha, confirmaSenha) {
        if (senha !== confirmaSenha) {
            // devover o texto do input com as senhas que não conferem
            alert('As senhas não conferem')
            throw new RangeError('As senhas não conferem')
        } else {

        }
    }
}

//============ api de cep =========================================

/*function retornaCep(cep) {

    if (cep) {
        document.getElementById('estadoTxt').value = "PR";
        document.getElementById('cidadeTxt').value = "Curitiba";
        document.getElementById('ruaText').value = "Rua Qualquer";
        document.getElementById('bairroTxt').value = "Boqueirão";
    }

}

const cep = document.getElementById('buttonCep')
if (cep) {
    cep.addEventListener('click', (event) => {
        const cepNumber = document.getElementById('cepNumber').value;
        console.log(cepNumber)
        retornaCep(cepNumber)
    })
}*/

const btnsalvar = document.getElementById('button')
if (btnsalvar) {
    btnsalvar.addEventListener('click', (event) => {

        //event.preventDefault();
        const nameTxt = document.getElementById('nameTxt').value;
        if (!nameTxt) {
            alert(`Favor prencher um nome`)
        }
        const rgNumber = document.getElementById('rgNumber').value;
        const emailTxt = document.getElementById('emailTxt').value;
        const senhaNumber = document.getElementById('senhaNumber').value;
        const cepNumber = document.getElementById('cepNumber').value;
        const estadoTxt = document.getElementById('estadoTxt').value;
        const cidadeTxt = document.getElementById('cidadeTxt').value;
        const ruaText = document.getElementById('ruaText').value;
        const bairroTxt = document.getElementById('bairroTxt').value;
        const numNumber = document.getElementById('numNumber').value;
        const complNumber = document.getElementById('complNumber').value;
        const novoUser = new CadastroLogin(nameTxt, rgNumber, emailTxt, senhaNumber, cepNumber, estadoTxt, cidadeTxt, ruaText, bairroTxt, numNumber, complNumber)

    })

}
















