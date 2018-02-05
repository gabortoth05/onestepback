(function(){ 
	jQuery.sap.declare("oneStepBack.utils.equalContainer");
	jQuery.sap.require("sap.m.Panel");
	
	
	
	sap.ui.core.Control.extend("oneStepBack.utils.equalContainer",{
		metadata:{
			 properties : {
	          }
		},
		init : function(){},
		renderer : {
	        render : function(oRm, oControl) {
	        	oRm.write("<div class='container-fluid'>");
	        	oRm.write('<div class="container text-center">');
	        	oRm.write('<div class="row">');
	        	oRm.write('<div class="col-sm-4">');
	        			oRm.write('<img src="img/calculate.jpeg" class="img-circle person" alt="" width="255" height="255">');
	        			oRm.write('<p class="text-center"><strong>Kalkulálj</strong></p><br>');
	        			oRm.write('</div>');
	        			oRm.write('<div class="col-sm-4">');
	        			oRm.write('<img src="img/onestepback_discussion.jpg" class="img-circle person" alt="" width="255" height="255">');
	        			oRm.write('<p class="text-center"><strong>Ismerd meg</strong></p><br>');
	        			oRm.write('</div>');
	        			oRm.write('<div class="col-sm-4">');
	        			oRm.write('<img src="img/onestepback_plant.jpeg" class="img-circle person" alt="" width="255" height="255">');
	        			oRm.write('<p class="text-center"><strong>Cselekedj</strong></p><br>');
	        			oRm.write('</div>');
	        			oRm.write('</div>');
	        			oRm.write('</div>');
	       }
		}
		
	});
	
})();

