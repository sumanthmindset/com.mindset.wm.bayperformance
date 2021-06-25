/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/mindset/wm/bayperformance/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});