/*jslint browser: true */

app.register({
	name: 'CharacterRepo',
	dependencies: [],
	factory: function () {
		'use strict';
		
		var _basePath = 'img/Characters/',
			_characters;
		
		_characters = [
			_basePath + 'CapMarvel.png',
			_basePath + 'Chester.png',
			_basePath + 'Coolspot.png',
			_basePath + 'Fatman.png',
			_basePath + 'Goku.png',
			_basePath + 'Hulk.png',
			_basePath + 'Megaman.png',
			_basePath + 'Rapgod.png',
			_basePath + 'Skele.png',
			_basePath + 'Wizard.png',
		];
		
		return {
			List: _characters,
			Random: function () {
				var _random = Math.floor(Math.random() * _characters.length);
				return _characters[_random];
			}
		};
	}
});