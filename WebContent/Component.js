jQuery.sap.declare("com.olit.cookbook.master.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
sap.ui.core.UIComponent
		.extend(
				"com.olit.cookbook.Component",
				{
					metadata : {
						name : "OLIT CookBook",
						version : "1.1.75",

						includes : [ "css/style.css", "css/smallComponents.css" ],
						library : "com.olit.cookbook.Component",
						dependencies : {
							libs : [ "sap.m", "sap.ui.core", "sap.ui.commons" ],
							components : []
						},
						config : {
							"title" : "",
							"icon" : "",

						}
					},
					createContent : function() {
						//jQuery.sap.log.setLevel(jQuery.sap.log.Level.ERROR);

						var master = sap.ui.view({
							id : "master",
							viewName : "com.olit.cookbook.view.Master",
							type : sap.ui.core.mvc.ViewType.XML
						});
//						var detail = sap.ui.view({
//							id : "detail",
//							viewName : "com.olit.cookbook.view.Detail",
//							type : sap.ui.core.mvc.ViewType.XML
//						})
						var initial = sap.ui.view({
							id : "initial",
							viewName : "com.olit.cookbook.view.Initial",
							type : sap.ui.core.mvc.ViewType.XML
						});
						


						var App = new sap.m.App('App');
						App.addPage(master);
						//App.addDetailPage(initial);
						
						//App.addPage(detail);
						
						
						
						// Test data set
						var testModel = new sap.ui.model.json.JSONModel();
						testModel.loadData("models/polist.json");
						sap.ui.getCore().setModel(testModel, "testModel");
						App.setModel(testModel, "testModel");

						// set the i18n
						var i18nModel = new sap.ui.model.resource.ResourceModel(
								{
									bundleUrl : "i18n/messageBundle.properties",
									bundleLocale : "en"

								});

						App.setModel(i18nModel, "i18n");
						sap.ui.getCore().setModel(i18nModel, "i18n");


						jQuery.sap.require("sap.m.Shell");
							var shell = new sap.m.Shell({			           
								app : [		
												App  
								           ]
							});
							return shell;
					}

				});