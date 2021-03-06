$(function(){

	$('.slider').slick({
		
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		responsive:[
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:2,
					slidesToScroll:2,
					dots:true,
					arrows:false,
				}
			},{
					breakpoint:600,
					settings: {
						slidesToShow:1,
						slidesToScroll:1,
						dots:true,
						arrows:false,
					}
				}

			


		]
	});

	

	    $('.uslugi').on('click', function (event) {

	    	   let usl = $(this).attr('href');
	    	   let top = $(usl).offset().top;
	    	  $('body,html').animate({scrollTop: top}, 800);
	    });

	    $('.portfolio').on('click', function (event) {

	    	   let usl = $(this).attr('href');
	    	   let top = $(usl).offset().top;
	    	  $('body,html').animate({scrollTop: top}, 800);
	    });

	    $('.coast').on('click', function (event) {

	    	   let usl = $(this).attr('href');
	    	   let top = $(usl).offset().top;
	    	  $('body,html').animate({scrollTop: top}, 800);
	    });



	/*Убираем/показываем меню при клике на бургер*/

	$('.menu-toggle').on('click', function(toggle){
		$('.mobile-menu').slideToggle('slow');

	});

	/*Показываем или убираем форму заказа звонка при клике на кнопки*/

	$('.btn-top').on('click', function(callbackShow){
		callbackShow.preventDefault();
		$('.callback-block').show();
	});

	$('.contacts-btn').on('click', function(callbackShow){
		callbackShow.preventDefault();
		$('.callback-block').show();
	});

	

	$('.callback__send').on('click', function (evt){
			evt.preventDefault();
		$('#callback__fio').val('');
		$('#callback__number').val('');
		$('.callback-block').hide();
		
		
	});

	$('.cls__btn').on('click', function (evt){
		evt.preventDefault();
		$('#callback__fio').val('');
		$('#callback__number').val('');
		$('.callback-block').hide();
	});
	


	$('.callback-block').on('click',  function(event){
		if (event.target == this) {
			$(this).hide();
		}
		
	});


	/*Показываем или убираем форму заказа при клике на кнопки*/

	$('.personal-btn').on('click', function(evt){
		evt.preventDefault();
		$('.knowmore-block').show();
	});

	$('.deals-btn').on('click', function(evt){
		evt.preventDefault();
		$('.knowmore-block').show();
	})

	$('.btn-exampls').on('click', function(evt){
		evt.preventDefault();
		$('.knowmore-block').show();
	});

	$('.knowmore__send').on('click', function(callbackSend){
		callbackSend.preventDefault();
		$('#knowmore__fio').val('');
		$('#knowmore__number').val('');
		$('#knowmore__email').val('');
		$('.knowmore-block').hide();
	});

	$('.know-cls__btn').on('click', function (formCls){
		formCls.preventDefault();
		$('#knowmore__fio').val('');
		$('#knowmore__number').val('');
		$('#knowmore__email').val('');
		$('.knowmore-block').hide();
	});


	$('.knowmore-block').on('click',  function(event){
		if (event.target == this) {
			$(this).hide();
		}
		
	});

	/*Убираем класс у тегов для анимации*/

	function show() {
		$('svg').removeClass('hidden');

	}

	setTimeout(show, 1000);
	


});
	
