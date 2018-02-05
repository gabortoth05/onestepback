sap.ui.controller("oneStepBack.view.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf onestepback.Master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf onestepback.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf onestepback.Master
*/
	onAfterRendering: function() {
		this.onLoadModel();
		

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf onestepback.Master
*/
//	onExit: function() {
//
//	}
	onCreateChart: function(){
		
		console.log(this.getView().getModel("inputModel").getData());
		var inputFields = this.getView().getModel("inputModel").getData();
		
		var housing = Number(inputFields.electricity) + 
		Number(inputFields.gas) + 
		Number(inputFields.heatOil) + 
		Number(inputFields.carGas) + 
		Number(inputFields.trash) + 
		Number(inputFields.water);
		
		var travel = Number(inputFields.byCar)+
		Number(inputFields.byBus)+
		Number(inputFields.byMetro)+
		Number(inputFields.byTaxi)+
		Number(inputFields.byTrain)+
		Number(inputFields.byPlane);
		
		var food = Number(inputFields.foodD)+
		Number(inputFields.foodM)+
		Number(inputFields.dailyCake)+
		Number(inputFields.dailyFruit)+
		Number(inputFields.dailySoda)+
		Number(inputFields.dailyWeat);
		
		var finalRes = Number(inputFields.finalResult);
		
		console.log(housing);
		
		var chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			title: {
				text: "Karbonlábnyomod részletesen"
			},
			data: [{
				type: "pie",
				startAngle: 240,
				yValueFormatString: "##0.00\"%\"",
				indexLabel: "{label} {y}",
				dataPoints: [
					{y: Number(housing)/finalRes, label: "Otthon"},
					{y: Number(travel)/finalRes, label: "Utazás"},
					{y: Number(food)/finalRes, label: "Étkezés"}
				]
			}]
		});
		chart.render();
	},
	
	onLoadModel: function(){
		
		var inputModel = new sap.ui.model.json.JSONModel({
			electricity: "",
			gas : "",
			heatOil : "",
			carGas : "",
			trash : "",
			water: "",
			byCar:"",
			byBus:"",
			byMetro:"",
			byTaxi:"",
			byTrain:"",
			byPlane:"",
			foodM:"",
			foodD:"",
			dailyWeat : false,
			dailyFruit: false,
			dailyCake: false,
			dailySoda: false,
			finalResult : " ",
			finalResultInTrees : " "
		});
		this.getView().setModel(inputModel, "inputModel");
		sap.ui.getCore().byId("master").setModel(inputModel, "inputModel");
	
		
	},
	
	onCalculation: function(evt){
		var inputFields = this.getView().getModel("inputModel").getData();
		var total = 0;
		var EF  = 1;
		
		var cereal, fruit, cake, soda;
		
		inputFields.dailyWeat == false ? cereal = 0 : cereal = 390/1000 * 365;
		inputFields.dailyFruit == false ? fruit = 0 : fruit = 67/1000 * 365;
		inputFields.dailyCake == false ? cake = 0 : cake = 500/1000 * 365;
		inputFields.dailySoda == false ? soda = 0 : soda = 44/1000 * 365;
		
		//http://efdb.apps.eea.europa.eu/?source=%7B%22query%22%3A%7B%22query_string%22%3A%7B%22query%22%3A%22kg%20Co2%20rail%22%2C%22default_operator%22%3A%22OR%22%2C%22analyze_wildcard%22%3Atrue%7D%7D%2C%22display_type%22%3A%22tabular%22%7D
		
		var carbonData = [
		          		inputFields.electricity/17.07 *12* EF,
		        		inputFields.gas * EF,
		        		inputFields.heatOil * EF,
		        		inputFields.carGas * EF,
		        		inputFields.trash * 12 * EF,
		        		inputFields.water/210 *12* EF,
		        		inputFields.byCar/100 * 2.104,
		        		inputFields.byBus/100 * 2.104,
		        		inputFields.byTaxi/100 * 3.061,
		        		inputFields.byTrain * (3140/1000),
		        		inputFields.byPlane * (2169.76),
		        		(inputFields.foodM * 1.63/1000) *365* EF,
		        		(inputFields.foodD * 440/1000) *365* EF,
		        		cereal,
		        		fruit,
		        		cake,
		        		soda
		                  ];
		
		for(index in carbonData){
			total += carbonData[index];
		}
		
		inputFields.finalResult = total.toFixed(2);
		inputFields.finalResultInTrees = (total.toFixed(2) / 22).toFixed(2);

		this.getView().getModel("inputModel").refresh(true);
	
		console.log(inputFields.finalResult);
	},
	
	toDetails: function(evt){
		var core= sap.ui.getCore();
		
		new sap.m.messageToast.show("Ez a funkció jelenleg még nem elérhető");
		
//		var navContainer = this.getView().byId("navContainer");
//		
//		navContainer.to(this.getView().byId("knowMore"), "slide");
//		
//		this.onCreateChart();
	},
	
	backToCalculation: function(evt){
		var core= sap.ui.getCore();
		var navContainer = this.getView().byId("navContainer");
		
		navContainer.to(this.getView().byId("resultPage"), "slide");
	},
	
	onSubscribe: function(evt){
		window.open("http://eepurl.com/cFJoer");
	}
});