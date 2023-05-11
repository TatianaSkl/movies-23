jQuery(window).load(function () {
	"use strict";
if(  jQuery( '.et-bfb' ).length <= 0 && jQuery( '.et-fb' ).length <= 0  ){
jQuery(".preloader-spinner").fadeOut();
jQuery(".preloader").delay(1000).fadeOut("slow");
}else{
jQuery(".preloader").css('display','none');
}
});