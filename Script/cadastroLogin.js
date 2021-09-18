class CadastroLogin 
{  
   constructor (nome, rg, email, senha, cep, estado, cidade, rua, bairro, numero, complemento) 
   {
    criaConatdor
    this.id = 10,
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
}

document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const nameTxt = document.getElementById('nameTxt').value;
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

    const novoUser =  new CadastroLogin  (nameTxt, rgNumber, emailTxt, senhaNumber, cepNumber, estadoTxt, cidadeTxt, ruaText, bairroTxt, numNumber, complNumber)
    console.log(novoUser)

})

// buscar cep API

