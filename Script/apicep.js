$(document).ready(function() {
    function limpaFormulario() {
        $("#ruaText").val("");
        $("#bairroTxt").val("");
        $("#cidadeTxt").val("");
        $("#estadoTxt").val("");
    }        
    $("#cepNumber").blur(function() {
        var cep = $("#cepNumber").val().replace(/\D/g, '');      
        if (cep != "") {            
            var validacep = /^[0-9]{8}$/;
            if(validacep.test(cep)) {                
                $("#ruaText").val("...");
                $("#bairroTxt").val("...");
                $("#cidadeTxt").val("...");
                $("#estadoTxt").val("...");                           
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(resposta) {

                    if (!("erro" in resposta)) {                        
                        $("#ruaText").val(resposta.logradouro);
                        $("#bairroTxt").val(resposta.bairro);
                        $("#cidadeTxt").val(resposta.localidade);
                        $("#estadoTxt").val(resposta.uf);
                    }else {                        
                        limpaFormulario();
                        alert("CEP não encontrado.");
                    }
                });
            }else {                
                limpaFormulario();
                alert("Formato de CEP inválido.");
            }
        }else {
            limpaFormulario();
        }
    });
});

