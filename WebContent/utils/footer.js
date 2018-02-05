(function(){ 
	jQuery.sap.declare("oneStepBack.utils.footer");
	
	
	
	sap.ui.core.Control.extend("oneStepBack.utils.footer",{
		metadata:{
			 properties : {
				 Height	: {type : "string"},
	          }
		},
		init : function(){},
		renderer : {
	        render : function(oRm, oControl) {
	        
	        	oRm.write("<footer class=''>");
	      		oRm.write("  <p style='text-align: center;'>One Step Back - 2017</p>");
	      		oRm.write("</footer>");
	        	
	       }
		}
		
	});
	
})();

