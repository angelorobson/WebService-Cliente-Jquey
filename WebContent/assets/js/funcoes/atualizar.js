
$(document).ready(function(){
	
	$("#atualizar-usuario").click(function(){
		
		
		
		var id = $("#txtSequencial").val(); // id chega como String
		
	    var valorSequencial = parseInt(id); // converti o id para inteiro
		var valorNome = $("#txtNome").val();
		var valorEmail = $("#txtEmail").val();
	    var valorSenha = $("#txtSenha").val();
	    
	    console.log(usuarioJson());
	    
	    
		
		$.ajax({
			url:'/Web_Service_com_Jquery/rest/usuario/atualizar',
			type:'PUT',
			data: usuarioJson(),
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success:function(res){
				
			alert("Alterado com Sucesso!!");
			 
			
			},
			error:function(res){
				alert("Alguma Coisa Ruim Aconteceu!! " + res.statusText);
			
			}
		});
		
		
		function usuarioJson() {
            return JSON.stringify({
				sequencial: valorSequencial,
			    nome: valorNome,
			    email: valorEmail,
			    senha: valorSenha,
			    
			});
		}
	});
		
	});

