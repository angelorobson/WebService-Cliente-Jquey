/**
 * 
 */

$(document).ready(function() {



//	var conteudo = localStorage.getItem('usuario'); //Inserindo como o exemplo acima
	
	var usuario = JSON.parse(localStorage.getItem('usuario')); // pega o json de usuários
	
	var sequencial = usuario.sequencial;

	atualizar(sequencial);



	function atualizar(sequencial) {

	}
	$.ajax({
		url:'/Web_Service_com_Jquery/rest/usuario/listarUsuarios/'+sequencial,
		type:'GET',
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		success:function(usuario){

			$("#editar-usuario").append(
					"<div class='form-group'>" +
					"<label for='txtSequencial'  class='col-sm-2 control-label'>ID</label>" +
					" <div class='col-sm-10'>" +
					"<input type='text' class='form-control' readonly='readonly' id='txtSequencial' placeholder='Id' value='"+usuario.sequencial +"'>" +
					" </div>" +
					" </div>" +

					"<div class='form-group'>" +
					"<label for='txtNome'  class='col-sm-2 control-label'>Nome</label>" + 
					" <div class='col-sm-10'>" +
					"<input type='text' class='form-control' id='txtNome' placeholder='Nome' value='"+usuario.nome +"'>" +
					"</div>" +
					" </div> " +

					" <div class='form-group'>" +
					" <label for='txtEmail' class='col-sm-2 control-label'>Email</label>" +
					" <div class='col-sm-10'>" +
					" <input type='email' class='form-control' id='txtEmail' placeholder='Email' value='"+usuario.email +"'> "+
					" </div>" +
					"  </div> " +
					" <div class='form-group'>" +
					" <label for='txtSenha' class='col-sm-2 control-label'>Password</label>" +
					" <div class='col-sm-10'> " +
					" <input type='text' class='form-control' id='txtSenha' placeholder='Password' value='"+usuario.senha +"'>" +
					" </div>" +
					" </div> " 
					
			);

		},
		error:function(usuario){
			alert("Bad thing happend! " + res.statusText);
		}
	});


});//termina o jquery
