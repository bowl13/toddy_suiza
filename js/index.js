// JavaScript Document
jQuery(document).ready(function($) {
	
	
	
	$('#banner-fade').bjqs({
		height      : 340,
        width       : 1010,
		animspeed : 0,
		automatic : false,
		nexttext : '<div id="btnSiguiente"></div>', 
		prevtext : '<div id="btnAnterior"></div>',
		showmarkers : false, // Show individual slide markers
		centermarkers : false
    });
	
	if($(window).height() <= 697){
			$('#contenido').css('position', 'relative');
		}else{
			$('#contenido').css('position', 'absolute');
		}
	
	$(window).resize(function() {
		if($(window).height() <= 697){
			$('#contenido').css('position', 'relative');
		}else{
			$('#contenido').css('position', 'absolute');
		}
	});
	
	
	$("#ticker").tweet({
          username: "toddy_cl",
          page: 2,
          avatar_size: 40,
          count: 20,
          loading_text: "cargando ..."
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              var top = ul.position().top;
              var h = ul.height();
              var incr = (h / ul.children().length);
              var newTop = top - incr;
              if (h + newTop <= 0) newTop = 0;
              ul.animate( {top: newTop}, 500 );
              ticker();
            }, 5000);
          };
          ticker();
        });

});