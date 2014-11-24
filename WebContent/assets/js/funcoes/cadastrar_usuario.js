
$(document).ready(function(){
	
	$("#cadastrar-usuario").click(function(){
		
		var valorNome = $("#nome").val();
		var valorEmail = $("#email").val();
	    var valorSenha = $("#senha").val();
		
		$.ajax({
			url:'/Web_Service_com_Jquery/rest/usuario/salvar',
			type:'POST',
			data: usuarioJson(),
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success:function(res){
				
			alert("Salvo com Sucesso!!");
			 $("#nome").val("");
	          $("#email").val("");
	          $("#senha").val("");
			
			},
			error:function(res){
				alert("Alguma Coisa Ruim Aconteceu!! " + res.statusText);
			}
		});
		
		
		function usuarioJson() {
            return JSON.stringify({
                "nome": valorNome,
                "email": valorEmail,
                "senha": valorSenha
                }); 
		}
	});
		
	});

