jQuery(document).ready(function ($) {

  

// Add the integer values of the left values together

    var trailCount = $('#under-line-1').length;
   
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
       

    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
       

    };

    $('.control_prev').click(function () {
        moveLeft(); 
var shiftedLeft = (parseFloat($('#under-line-1').css('left')) - 52) + 'px';
$('#under-line-1').css('left', shiftedLeft);
    });

    $('.control_next').click(function () {
        moveRight();
var shiftedRight = (parseFloat($('#under-line-1').css('left')) + 52) + 'px';
$('#under-line-1').css('left', shiftedRight);
    });

});    