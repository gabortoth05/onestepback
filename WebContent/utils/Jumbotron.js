(function(){ 
	jQuery.sap.declare("oneStepBack.utils.Jumbotron");
	jQuery.sap.require("sap.m.Panel");
	
	
	
	sap.ui.core.Control.extend("oneStepBack.utils.Jumbotron",{
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
	        	oRm.write("<div  class='jumbotron'");
	        	oRm.write("<header>");
	        	oRm.write("<div class='container'>");
	        	oRm.write("<div class='row'>");
	        	oRm.write("<div class='col-sm-12'>");
	        	oRm.write("<div class='header-content'>");
	        	oRm.write("<div class='header-content-inner'>");
	        	oRm.write("<h1>Kövesd nyomon karbonlábnyomod a One Step Back segítségével!</h1>");
	        	//oRm.write("<a class='btn btn-outline btn-xl page-scroll headerButton' href='http://eepurl.com/cFJoer' target='_blank'>Iratkozz fel, és tudj meg többet!</a>");
	        	oRm.write("</div>");
	        	oRm.write("</div>");
	        	oRm.write("</div>");
	        	oRm.write("<div class='col-sm-3'>");

	        	oRm.write("</div>");
	        	oRm.write("</div>");
	        	oRm.write("</div>");
	        	oRm.write("</header>");
	        	oRm.write("</div>");
	        	
	       }
		}
		
	});
	
})();

