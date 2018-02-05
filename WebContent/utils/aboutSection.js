(function(){ 
	jQuery.sap.declare("oneStepBack.utils.aboutSection");
	jQuery.sap.require("sap.m.Panel");
	
	
	
	sap.ui.core.Control.extend("oneStepBack.utils.aboutSection",{
		metadata:{
			 properties : {
				 Height			 : {type : "string"},
				 Text            : {type : "string"},  
				 AltText		 : {type : "string"},
				 BackgroundColor : {type : "string"},
				 BackgroundImage : {type : "string"},
				 ButtonText		 : {type : "string"},
				 ButtonType		 : {type : "string"}
	          }
		},
		init : function(){},
		renderer : {
	        render : function(oRm, oControl) {
	        	oRm.write("<div class='container-fluid'>");
	        	oRm.write("<div class='row'>");
	        	oRm.write("<div class='col-sm-6'>");
	        	oRm.write("<h2>Mi a One Step Back?</h2>");
	        	
	        	oRm.write('<div class="card" style="width: 100%;">');
	        	oRm.write('');
	        	oRm.write('<div class="card-body">');
	        	oRm.write("<p>Gondoltad volna, hogy minden ami a modern élet gyümölcse áldozattal jár?</p>");
	        	oRm.write("<p>Mindennapjaink során akár aktívan, akár passzívan de nyomot hagyunk a környezetünkben, amely gyakran megterhelő Földünk számára</p>");
	        	oRm.write("<p>A One Step Back segít megérteni, és csökkenteni az általad hagyott nyomot.</p>");
	        	oRm.write('</div>');
	        	oRm.write('</div>');
	        	

	        	oRm.write("</div>");
	        	oRm.write("<div class='col-sm-6'>");
	        	oRm.write("<img width='600px' class='bottomFloat' src='img/CITY.png' />");
	        	oRm.write("</div>");
	        	oRm.write("</div>");
	        	oRm.write("</div>");
	       }
		}
		
	});
	
})();

