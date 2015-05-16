/* global app */

app.register({
	name: 'ComicModel',
	dependencies: ['jquery', 'ko', 'PanelModel'],
	factory: function ($, ko, PanelModel) {
		"use strict";
		
		return function (data) {
			var _self = {};
			
			_self.Panels = ko.observableArray([]);
			
			for (var _panelCount = 0; _panelCount < 3; _panelCount++) {
				_self.Panels.push(
					new PanelModel({
						background: data.background,
						character1: data.character1,
						character2: data.character2
					})
				);
			}
			
			return _self;
		};
	}
});
