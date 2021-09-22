class CadastroLogin {


    static novoId = 1
    constructor(nome, rg, email, senha, confSenha, cep, estado, cidade, rua, bairro, numero, complemento) {


        this.validaSenha(senha, confSenha)

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

    // valida se as senhas são iguais
    validaSenha(senha, confSenha) {
        console.log(senha, confSenha)
        if (senha !== confSenha) {
            // devover o texto do input com as senhas que não conferem
            alert('As senhas não conferem')
            //location.href ="./registrationForm.html"
            document.getElementById('senhaNumberConfirm').value = "";
            throw new RangeError('As senhas não conferem')
        } else {

        }
    }
}


// previne o  evento submit do form
const submit = document.getElementById('login.html')
if (submit) {
    submit.addEventListener('submit', function (ev) {
        ev.preventDefault()
    })
}
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
        const senhaNumberConfirm = document.getElementById('senhaNumberConfirm').value;
        const cepNumber = document.getElementById('cepNumber').value;
        const estadoTxt = document.getElementById('estadoTxt').value;
        const cidadeTxt = document.getElementById('cidadeTxt').value;
        const ruaText = document.getElementById('ruaText').value;
        const bairroTxt = document.getElementById('bairroTxt').value;
        const numNumber = document.getElementById('numNumber').value;
        const complNumber = document.getElementById('complNumber').value;
        const novoUser = new CadastroLogin(nameTxt, rgNumber, emailTxt, senhaNumber, senhaNumberConfirm, cepNumber, estadoTxt, cidadeTxt, ruaText, bairroTxt, numNumber, complNumber)
        novoUser.validaSenha()
        if (novoUser) {
            alert('cadastrado  com sucesso')
            location.href = "../index.html"
        }
    })

}
















