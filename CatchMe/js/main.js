
var songMP3 = new Audio('Sonidos/song.mp3');
songMP3.play();
(function($) {
	$(document).ready(function() {
		$('#logo').click(function() {
			document.location.href = 'http://www.spritely.net/';
		});
				
		$('#mainMenu')
			.sprite({fps: 60, no_of_frames: 0})
			.spRandom({top: 100, bottom: 100, left: 0, right: 0})
			//.activeOnClick()

		$('#star')
			.sprite({fps: 6, no_of_frames: 3})

	});
})(jQuery);



