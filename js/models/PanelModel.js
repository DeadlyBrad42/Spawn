/* global app */

app.register({
	name: 'PanelModel',
	dependencies: ['jquery', 'ko'],
	factory: function ($, ko) {
		"use strict";
		
		return function (data) {
			var _self = {};
			
			_self.Background = ko.observable(data.background || '');
			_self.SpeechBubbleOwner = ko.observable(Math.floor(Math.random() * 2));
			_self.SpeechBubbleText = ko.observable(data.text || '');
			_self.Character1 = ko.observable(data.character1 || '');
			_self.Character2 = ko.observable(data.character2 || '');
			
			return _self;
		};
	}
});
