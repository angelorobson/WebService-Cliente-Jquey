/**
 * Created by Angelo on 25/10/14.
 */


    //inicio o jquery
$(document).ready(function() {
// inicio uma requisiÃ§Ã£o
    $.ajax({
        // url para o arquivo json.php
        url :"/Web_Service_com_Jquery/rest/usuario/listarUsuarios",
        // dataType json
        dataType : "json",
        async :true,
       // funÃ§Ã£o para de sucesso
        success : function(usuarios){
          console.log("sucesso");
          
            $.each(usuarios, function (i, item) {
                $("#listar-usuarios").append(
                   
                    "<tr>" +

                        "<td>" + item.sequencial + "</td>"  +
                        "<td>" + item.nome + "</td>"  +
                        "<td>" + item.email + "</td>" +
                        "<td>" + item.senha + "</td>"  +
                        "<td>" + item.status + "</td>"  +
                        "<td><a href='javascript:buscarUsuario("+ item.sequencial +")' >Editar</a> | <a href='javascript:confirmarExclusao("+ item.sequencial +")'>Excluir</a> </td>"  +
                       

                        "</tr>" 
                      
                );

            });

        },
        error:function(jqXHR, textStatus, errorThrown) {

            alert("falhou");
        }



    });//termina o ajax
    
    
    
});//termina o jquery
