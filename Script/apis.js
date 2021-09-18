$(document).ready(function() {
    // Limpa valores do formulário de cep.
    function limpa_formulário_cep() {
        $("#ruaText").val("");
        $("#bairroTxt").val("");
        $("#cidadeTxt").val("");
        $("#estadoTxt").val("");
    }    
    //Quando o campo cep perde o foco.
    $("#cepNumber").blur(function() {
        var cep = $("#cepNumber").val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#ruaText").val("...");
                $("#bairroTxt").val("...");
                $("#cidadeTxt").val("...");
                $("#estadoTxt").val("...");
                                
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(resposta) {

                    if (!("erro" in resposta)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#ruaText").val(resposta.logradouro);
                        $("#bairroTxt").val(resposta.bairro);
                        $("#cidadeTxt").val(resposta.localidade);
                        $("#estadoTxt").val(resposta.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

