sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
		"sap/ui/model/Sorter",
		"sap/ui/model/FilterOperator",
		"sap/ui/model/Filter"
], function (Controller, Device, Sorter, FilterOperator, Filter) {
	"use strict";

	return Controller.extend("com.mindset.wm.bayperformance.controller.App", {
		onInit: function () {

		},
		   onPress : function() {
                this._Dialog = sap.ui.xmlfragment("com.mindset.wm.bayperformance.fragment.Dialog",
                                this);
                this._Dialog.open();
    },
    handleDialogConfirm:function(oEvent){
    	var oTable = this.byId("TableId"),
    		mParams = oEvent.getParameters(),
			oBinding = oTable.getBinding("items"),
				sPath,
					bDescending,
					aSorters = [],
				sPath = mParams.sortItem.getKey();
				bDescending = mParams.sortDescending;
				aSorters.push(new Sorter(sPath, bDescending));

				oBinding.sort(aSorters);
    	
    },
 	onSearch: function (oEvent) {
				var oTable= this.getView().byId("TableId");
				var oBinding = oTable.getBinding("items");
				oBinding.filter([]);
				var sValue = oEvent.getSource().getValue();

				var aFilter = [];
				var oFilter = new Filter({

    filters: [

      new Filter("Article", FilterOperator.Contains, sValue),
      new Filter("CWS", FilterOperator.Contains, sValue),
        new Filter("LY", FilterOperator.Contains, sValue),
          new Filter("LW", FilterOperator.Contains, sValue)

    ]

  });

				// if (!isNaN(sValue)) {

				// 	aFilter.push(new Filter("ArticleId", FilterOperator.Contains, sValue));

				// } else {
				// 	aFilter.push(new Filter("Article", FilterOperator.Contains, sValue));
				// }

				oBinding.filter(oFilter);

			}
	});
});