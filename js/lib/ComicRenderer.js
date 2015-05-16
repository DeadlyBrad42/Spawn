/* global app */

app.register({
	name: 'ComicRenderer',
	dependencies: ['jquery'],
	factory: function ($) {
		"use strict";
		
		return function (comic) {
			//console.log(comic);
			var _resourceUrls = [],
				_images = [],
				_imagesLoaded = 0,
				_onImgLoad,
				render;
			
			// Add URLs to the resourceUrls array
			for (var _panelCount = 0; _panelCount < comic.Panels.length; _panelCount++) {
				var _panel = comic.Panels[_panelCount];
				
				_resourceUrls.push(
					_panel.Background,
					_panel.Character1,
					_panel.Character2
				);
			}
			
			// Initialize and load each resource from  _resourceUrls
			_onImgLoad = function () {
					if(++_imagesLoaded >= _resourceUrls.length){
					render();
				};
			};
			for (var _resourceCount = 0; _resourceCount < _resourceUrls.length; _resourceCount++) {
				var _img = new Image();
				_images.push(_img);
				_img.onload = _onImgLoad;
				_img.src = _resourceUrls[_resourceCount];
			}
			
			// Once all resources have been loaded, go ahead and render the canvas
			render = function () {
				console.log("Render here.");
			};
		};
	}
});
