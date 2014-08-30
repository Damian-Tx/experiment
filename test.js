
$(document).ready(function() {
	$("#pic").click(function() {
		$(this).animate({'width': '80%', 'height': '80%'}, 1500).fadeOut('slow').fadeIn(1500);
	})
});