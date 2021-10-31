jQuery(document).ready(function ($) {

   var left1 = document.getElementById('trail').style.left;
var left2 = "43px";

// Add the integer values of the left values together
var leftTotal = parseInt( left1, 10 ) + parseInt( left2, 10 ) + "px";
   
   
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
var shiftedLeft = (parseFloat($('#trail').css('left')) - 40) + 'px';
$('#trail').css('left', shiftedLeft);
    });

    $('.control_next').click(function () {
        moveRight();
var shiftedRight = (parseFloat($('#trail').css('left')) + 40) + 'px';
$('#trail').css('left', shiftedRight);
    });

});    