$(function(){
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});
	$('.accordeon__head').on('click', function(){
		var el = $(this);
		el.next('.accordeon__body').slideToggle();
		el.toggleClass('open');
		return false;
	});

	
	$('.toggle-filter').click(function(){
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('open');
		$('.box-product').toggleClass('full');
	})

	// $('.toggle-menu').click(function(){
	// 	$(this).toggleClass('active');
	// 	$('.dropdown-content--menu').toggleClass('open');
	// })

	$('.styler').styler();

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] );
			$( "#amount1" ).val( "$" + ui.values[ 1 ] );
		}
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount1" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
	
	// $('.dropdown-content__title').click(function(){
	// 	$(this).toggleClass('d-open');
	// })

});





























// window.onload = function() {

// 	var images = document.querySelectorAll('#slider .images img');
// 	var i = 0;

// 	document.getElementById('btn-prev').onclick = function(){
// 		images[i].className = '';
// 		i--;

// 		if(i < 0){
// 			i = images.length - 1;
// 		}

// 		images[i].className = 'active';
// 	}
// 	document.getElementById('btn-next').onclick = function(){
// 		images[i].className = '';
// 		i++;

// 		if(i >= images.length){
// 			i=0;
// 		}
// 		images[i].className = 'active';
// 	}
// }