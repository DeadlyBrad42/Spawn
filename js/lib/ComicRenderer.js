/* global app */

app.register({
	name: 'ComicRenderer',
	dependencies: ['jquery'],
	factory: function ($) {
		"use strict";
		
		var AddImage,
			OnImageLoad,
			Render,
			_comic,
			_imagesLoaded = 0,
			_totalImagesToLoad = 0,
			_img_PanelFrame,
			_img_SpeechBubbleLeft,
			_img_SpeechBubbleRight;
		
		// Adds the image and begins loading it
		AddImage = function (url) {
			_totalImagesToLoad++;
			
			var _img = new Image();
			_img.onload = OnImageLoad;
			_img.src = url;
			return _img;
		};
		
		// Once loaded, if it's the final image, begin rendering to canvas
		OnImageLoad = function () {
				if(++_imagesLoaded >= _totalImagesToLoad){
					Render();
			};
		};
		
		// Render each panel to the canvas
		Render = function () {
			var _canvas = $('canvas.comic')[0];
			var _ctx = _canvas.getContext('2d');
			
			_ctx.drawImage(_img_PanelFrame, 0, 0);
			
			for (var _panelCount = 0; _panelCount < _comic.Panels.length; _panelCount++) {
				var _panel = _comic.Panels[_panelCount],
					_panelXOrigin = ((350 + 10) * _panelCount + 10),
					_panelYOrigin = 10,
					_panelWidth = 350,
					_panelHeight = 450;
				
				// Draw the background. Should always have a 10px padding around it
				_ctx.drawImage(
					_panel.Background,
					_panelXOrigin,
					_panelYOrigin
				);
				
				// Draw character 1. Should always be anchored to bottom left
				_ctx.drawImage(
					_panel.Character1,
					_panelXOrigin,
					_panelYOrigin + _panelHeight - _panel.Character1.height
				);
				
				// Draw character 2. Should always be anchored to bottom right
				_ctx.drawImage(
					_panel.Character2,
					_panelXOrigin + _panelWidth - _panel.Character2.width,
					_panelYOrigin + _panelHeight - _panel.Character2.height
				);
				
				// Depending on the speech bubble owner, draw a different speech bubble
				_ctx.drawImage(
					( _panel.SpeechBubbleOwner == 1 ? _img_SpeechBubbleLeft : _img_SpeechBubbleRight),
					_panelXOrigin + 10,
					_panelYOrigin + 10
				);
			}
		};
		
		return function (comic) {
			_comic = comic;
			
			// Load shared resources
			_img_PanelFrame = AddImage('img/PanelFrame.png'),
			_img_SpeechBubbleLeft = AddImage('img/SpeechLeft.png'),
			_img_SpeechBubbleRight = AddImage('img/SpeechRight.png')
			
			// Convert each panel's resources to new Image()
			for (var _panelCount = 0; _panelCount < _comic.Panels.length; _panelCount++) {
				var _panel = _comic.Panels[_panelCount];
				_panel.Background = AddImage(_panel.Background);
				_panel.Character1 = AddImage(_panel.Character1);
				_panel.Character2 = AddImage(_panel.Character2);
			}
		};
	}
});
