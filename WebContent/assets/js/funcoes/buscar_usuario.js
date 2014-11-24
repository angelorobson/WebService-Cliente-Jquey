
 function buscarUsuario(sequencial) {
    	
	 if(window.confirm("Tem certeza que deseja editar o Registro: " +sequencial)){
		buscarUsuarioPorId(sequencial);
	 }
	}


function buscarUsuarioPorId(sequencial) {
	
	 $.ajax({
			url:'/Web_Service_com_Jquery/rest/usuario/listarUsuarios/'+sequencial,
			type:'GET',
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success:function(usuario){
				
//				localStorage.setItem('usuario', usuario.sequencial);
				
				localStorage.setItem('usuario', JSON.stringify({
					sequencial: usuario.sequencial,
				    nome: usuario.nome,
				    email: usuario.email,
				    senha: usuario.senha,
				    status:usuario.status
				}));
				
					window.location="../../views/crud/editar_usuario.html";
			
			},
			error:function(usuario){
				alert("Bad thing happend! " + res.statusText);
			}
		});
}

 
