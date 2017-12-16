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
	$.getJSON("users/"+id,function(data){
		$("#name").text(data.name);
		$("#email").text(data.email);
		$("#show").dialog({closeText:""});
	})

};

function post_list(id){	
	$.getJSON("microposts/",function(data){

		for(var i=0; i<data.length; i++){

			var nuevaFila="<tr><td>";
            nuevaFila+=data[i].content;
            nuevaFila+="</td></tr>";
            $("#post_list_body").append(nuevaFila);

		}
		$("#post_list").dialog({closeText:""});
	})
};


function edit_user(id){	
	$.getJSON("users/"+id,function(data){

		alert(data);
		$("#edit_user").dialog({closeText:""});
	})

}
