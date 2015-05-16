/*jslint browser: true */

app.register({
	name: 'BackgroundRepo',
	dependencies: [],
	factory: function () {
		'use strict';
		
		var _basePath = 'img/Backgrounds/',
			_backgrounds;
		
		_backgrounds = [
			_basePath + 'Alley.png',
			_basePath + 'Bar.png'
		];
		
		return {
			List: _backgrounds,
			Random: function () {
				var _random = Math.floor(Math.random() * _backgrounds.length);
				return _backgrounds[_random];
			}
		};
	}
});