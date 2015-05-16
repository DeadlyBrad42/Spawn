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
			_basePath + 'Bar.png',
			_basePath + 'Beach.png',
			_basePath + 'Cockpit.png',
			_basePath + 'SDungeon.png',
			_basePath + 'Space Shuttle.png',
			_basePath + 'Stoner.png',
			_basePath + 'Store.png',
			_basePath + 'Volcano.png',
			_basePath + 'Wrestling Ring.png',
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