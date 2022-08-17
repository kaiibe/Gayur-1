var id = setInterval( "timer ()", 3000 );
var Slider = [];
var cnt = 1;

Slider.push( "url('assets/img/slider/Slide1.png')" );
Slider.push( "url('assets/img/slider/Slide4.jpg')" );
Slider.push( "url('assets/img/slider/Slide3.jpg')" );
Slider.push( "url('assets/img/slider/Slide2.png')" );


function timer () {

	$('.slideshow').css( "background-image", Slider[cnt] );

	cnt ++;

	if ( cnt == 4 )
		cnt = 0;

} 
