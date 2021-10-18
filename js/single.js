
const setTheme = theme => document.documentElement.className = theme;
var themeColor = ["red","blue", "green", "purple", "yellow", "gray", "white", "black", 'pink'];
$('#theme-select').on('change', function() {
  localStorage.setItem("theme", this.value);
  
  if(localStorage.getItem("dark-mode-storage") == 'night' && this.value == 'default' ){
	localStorage.setItem("theme", 'white');
  }else if(localStorage.getItem("dark-mode-storage") == 'light' && this.value == 'default' ){
	localStorage.setItem("theme", 'black');
  }

  $.each( themeColor, function( i, color ){
		
		delClass(color)
			

		if (localStorage.getItem("theme") == color) {
			toogClass(color)
			
		}

	
	});
  
});

$(document).ready(function(){
	if (localStorage.getItem("theme") === null) {
		localStorage.setItem("dark-mode-storage", 'light');
		localStorage.setItem("theme", 'black');
	}
	
	
	if(localStorage.getItem("theme")== "black" ||localStorage.getItem("theme") == "white"){
		var seldefault = $('#theme-select').val('default');
		seldefault.prop('selected', true);
	}else{
		var selbox = $("#theme-select").val(localStorage.getItem("theme"));
		selbox.prop('selected', true);
	}
	
	
	
	
	$.each( themeColor, function( i, color ){
		if (localStorage.getItem("theme") == color) {
			toogClass(color);
		}
	});
	

	
});
function delClass(color){
	$('#single strong').each(function(){
				$(this).removeClass('text-' + color  + '-500');
			
			});

			for (var i = 1; i <= 6; i++) {
			
				$('#single  h' + i).removeClass('text-' + color + '-500');
				
			}
}

function toogClass(color){
	for (var i = 1; i <= 6; i++) {
				$('#single  h' + i).toggleClass('text-' + color + '-500');
		}

			$('#single strong').each(function(){
				$(this).toggleClass('text-' + color + '-500');
			});
}






