sap.ui.controller("com.olit.cookbook.view.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.olit.cookbook.master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.olit.cookbook.master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.olit.cookbook.master
*/
	onAfterRendering: function() {
		this.setGlobalModel();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.olit.cookbook.master
*/
//	onExit: function() {
//
//	}

	onCompleteWizard:function(evt){
		var core = sap.ui.getCore();
		
		core.byId("master--iconTabBar").setSelectedKey("review");
		var quickModel = core.byId("App").getModel("globalModel").getData();
		var EF = 1; //emission Factor
		console.log("this is the local model", core.byId("App").getModel("globalModel").getData());
		

		
		var quickCalculation = {
				housing : (quickModel.electricity/15.07)*EF*12 + (quickModel.water/218 * 12 * EF) + (quickModel.gas * EF),
				travel : (quickModel.fuel) + (quickModel.train) + (quickModel.bus),
				food : (quickModel.meat * 365) + (quickModel.vegetable * 365) + (quickModel.fruite * 365),
				other : (quickModel.sport * 12) + (quickModel.phone *12) + (quickModel.clothes * 12)
		}
		var total = quickCalculation.housing + quickCalculation.travel + quickCalculation.food + quickCalculation.other;
		var quickModel = new sap.ui.model.json.JSONModel();
		quickModel.setData(quickCalculation);
		core.byId("App").setModel(quickModel,"quickModel");
		core.byId("App").getModel("quickModel").refresh(true);
		
		core.byId("master--totalSum").setValue("Karbonlábnyomod egyenlő" +" "+ (total/455).toFixed(0) + " " + "fával");
		
	},
	
	setGlobalModel:function(evt){
		var core = sap.ui.getCore();
		
		var modelData = {
				electricity:"",
				water:"",
				gas:"",
				fuel:"",
				train:"",
				bus:"",
				meat:"",
				vegetable:"",
				fruite:"",
				sport:"",
				phone:"",
				clothes:""	
			};
		
		var globalModel = new sap.ui.model.json.JSONModel();
		globalModel.setData(modelData);
		core.byId("App").setModel(globalModel,"globalModel");
		core.byId("App").getModel("globalModel").refresh(true);
		
		console.log("this is the local model", core.byId("App").getModel("globalModel").getData());
	}
	
});