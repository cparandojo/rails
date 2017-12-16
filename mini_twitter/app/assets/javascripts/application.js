// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree
//= require jquery3
//= require jquery_ujs
//= require jquery-ui
//= require jquery-ui/widgets/dialog

function show_user(id){	
	//realizamos llamada buscando la información del usuario.
	$.getJSON("users/"+id,function(data){
		//seteamos la información correspondiente
		$("#show_name").text(data.name);
		$("#show_email").text(data.email);
		$("#show").dialog({closeText:""});
	})

};

function post_list(id){	
	$.getJSON("microposts/",function(data){

		//borramos los elementos anteriores
		$("#post_list_body tr").detach();

		for(var i=0; i<data.length; i++){

			if(id==data[i].user_id){
				//si el id del usuario corresponde con el del post entonces lo añadimos a la lista.
				var nuevaFila="<tr><td>";
            	nuevaFila+=data[i].content;
            	nuevaFila+="</td></tr>";
            	$("#post_list_body").append(nuevaFila);
			}
		}
		$("#post_list").dialog({closeText:""});
	})
};


function edit_user(id){	

	$("#userId").val(id);
	//obtenemos la información del usuario
	$.getJSON("users/"+id,function(data){

		
		$("#edit_name").val(data.name);
		$("#edit_email").val(data.email);

		$("#edit_user").dialog({closeText:""});
	})

};

$(document).ready(function(){
	//cuando el DOM este listo, definimos la función del evento click del boton.
   	$("#edit_button").click(function(){

   		var userId =  $("#userId").val();
    	var editName = $("#edit_name").val();
    	var editEmail = $("#edit_email").val();

    	$.post("/users",
	    {
	        name: editName,
	        email: editEmail
	    },
	    function(data, status){
	        alert("Data: " + data + "\nStatus: " + status);
	    });
	});
});




