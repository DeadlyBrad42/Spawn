/* global app */

app.register({
	name: 'AppModel',
	dependencies: ['jquery', 'ko', 'ComicModel', 'BackgroundRepo', 'CharacterRepo', 'ComicRenderer'],
	factory: function ($, ko, ComicModel, BackgroundRepo, CharacterRepo, ComicRenderer) {
		"use strict";
		
		return function () {
			var _self = {};
			
			_self.Comic = ko.observable();
			
			_self.Generate = function (context) {
				var _background = BackgroundRepo.Random(),
					_character1 = CharacterRepo.Random(),
					_character2 = CharacterRepo.Random();
					
				_self.Comic(
					new ComicModel({
						background: _background,
						character1: _character1,
						character2: _character2
					})
				);
				
				ComicRenderer(
					ko.toJS(_self.Comic)
				);
			};
			
			// Randomly generate a panel
			_self.Generate();
			
			return _self;
		};
	}
});
