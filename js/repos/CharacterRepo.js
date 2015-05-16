/*jslint browser: true */

app.register({
	name: 'CharacterRepo',
	dependencies: [],
	factory: function () {
		'use strict';
		
		var _basePath = 'img/Characters/',
			_characters;
		
		_characters = [
			_basePath + 'Chester.png',
			_basePath + 'Goku.png'
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