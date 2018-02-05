(function(){ 
	jQuery.sap.declare("oneStepBack.utils.chartHolder");
	jQuery.sap.require("sap.m.Panel");
	
	
	sap.ui.core.Control.extend("oneStepBack.utils.chartHolder",{
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
	        	oRm.write('<div id="chartContainer" style="height: 300px; width: 100%;"></div>');
	        		          	
	       }
		}
		
	});
	
})();

