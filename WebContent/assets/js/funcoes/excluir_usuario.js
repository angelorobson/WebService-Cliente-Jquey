/**
 * 
 */


 function confirmarExclusao(sequencial) {
    	
	 if(window.confirm("Tem certeza que deseja excluir o Registro: " +sequencial)){
		deletar(sequencial);
	 }
	}

function deletar(sequencial) {
	
	 $.ajax({
			url:'/Web_Service_com_Jquery/rest/usuario/deletar/'+sequencial,
			type:'DELETE',
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success:function(res){
			alert("excluido com Sucesso!");
			window.location="../../views/crud/listar_usuario.html";
			
			},
			error:function(res){
				alert("Bad thing happend! " + res.statusText);
			}
		});
}
 
