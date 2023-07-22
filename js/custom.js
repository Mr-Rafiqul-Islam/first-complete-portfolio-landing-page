
function myFocus(x) {
	x.style.background='#ffffffb8'
}

function myValidation() {
	var name = document.forms['contactForm']['name'].value;
	var email = document.forms['contactForm']['email'].value;
	var phone = document.forms['contactForm']['phone'].value;
	var message = document.forms['contactForm']['message'].value;
	
	var error =[];
	if (name =='' || name.length <3 ) {
		error[0]='Name must be atleast 3 letters';
		document.getElementById('name-error').innerHTML=error[0];
	} else {
		document.getElementById('name-error').innerHTML='';
	}
	if (email =='' || email.length <10 ) {
		error[1]='Please input a valid email';
		document.getElementById('email-error').innerHTML=error[1];
	} else {
		document.getElementById('email-error').innerHTML='';
	}
	if (phone =='' || phone.length <11 ) {
		error[2]='Phone must be atleast 11 letters';
		document.getElementById('phone-error').innerHTML=error[2];
	} else {
		document.getElementById('phone-error').innerHTML='';
	}
	if (message =='' || message.length <50 ) {
		error[3]='Message must be atleast 50 letters';
		document.getElementById('message-error').innerHTML=error[3];
	} else {
		document.getElementById('message-error').innerHTML='';
	}
	
	if (error.length >0) {
		return false;
	}
}

/*-- ==JQuery start== --*/


$(document).ready(function(){

	/*-- =====Menu Bar Active start==== --*/

	$('.menu').on('click','li',function(){
		$('.menu li.active').removeClass('active');
		$(this).addClass('active')
	});

	/*-- =====Nav Bar start==== --*/

	$('#menu-icon').click(function(){
		$('.menu ul').slideToggle(1000);
	});

	$(window).resize(function(){
		if($(window).width() > 576){
			$('.menu ul').show();
		}else{
			$('.menu ul').hide();
		}
	});



	/*-- ==Upper button scroll start== --*/
	$(window).scroll(function(){
		var x= $(window).scrollTop();
		 if (x>1000) {
			$('.upper').fadeIn(1000);
		 } else {
			$('.upper').fadeOut(1000);
		 }

	})

	$('.upper').click(function(){
		$('html').animate({scrollTop: 0},);
	});

});