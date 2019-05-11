$(document).ready(function(){
	$(function(){
	$('#picGallery img:gt(0)').hide();

    
    $('a').click(function(e) {
		e.preventDefault();
        $('a:hover').css({
         'color': '#000'           
        });
        var displayImg = $(this).attr('href');
        $('div').append('<div id="displayBox"><img src="' + displayImg + '"/></div>');
        $('displayBox').live('click', function(e) {
            e.preventDefault();
            $('displayBox').fadeIn(100, 1);
        });

     }); 
       
    }); 

});


