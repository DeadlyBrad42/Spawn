/* global app */

app.register({
	name: 'AppModel',
	dependencies: ['jquery', 'ko', 'ComicModel', 'BackgroundRepo', 'CharacterRepo'],
	factory: function ($, ko, ComicModel, BackgroundRepo, CharacterRepo) {
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
				
				//_self.DrawCanvas();
			};
			
			_self.DrawCanvas = function () {
				var _canvas = $('canvas.comic')[0],
				_comic = _self.Comic();
				
				// If canvas functions exist
				if(_canvas.getContext) {
					var _drawingCtx;
					
					// Get the canvas context
					var _drawingCtx = _canvas.getContext('2d');
					
					// Fetch the images
					_bgImg.src = _comic.Panels()[0].Background();
					_bgImg.onload = function () {
						_drawingCtx.drawImage(_bgImg, 0, 0);
					};
					_ch1Img.src = _comic.Panels()[0].Character1();
					_ch2Img.src = _comic.Panels()[0].Character2();
				}
			};
			
			// Randomly generate a panel
			_self.Generate();
			
			return _self;
		};
	}
});
