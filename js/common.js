$(document).ready(function() {

	$.stellar({
		responsive: true,
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		},
		navText: ''
	});

	$('.popup-image').magnificPopup({
		type: 'image'
		// other options
	});


	function wResize() {
		$("header").css("min-height", ($(window).height()) / 2);
	};
	wResize();

	$('.top_phone .wrapper .tab').click(function () {
		$('.top_phone .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.top_phone .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	$('.tabs_header .wrapper .tab').click(function () {
		$('.tabs_header .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.tabs_header .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	$('.s_location .tab').click(function () {
		$('.s_location .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.s_location .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	$('.s_questions .wrapper .tab').click(function () {
		$('.s_questions .wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.s_questions .wrapper .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function () {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}
	;

	//Попап формы

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function () {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(function () {
		$('form').submit(function (e) {
//отменяем стандартное действие при отправке формы
			e.preventDefault();
//берем из формы метод передачи данных
//получаем адрес скрипта на сервере, куда нужно отправить форму
//получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
//то есть в стандартном формате передачи данных формы
			var m_data = $(this).serialize();
			$.ajax({
				type: 'POST',
				url: 'mail.php',
				data: m_data,
				success: function () {
					alert("Спасибо за отправку формы!");
					setTimeout(function() {
						var magnificPopup = $.magnificPopup.instance;
						magnificPopup.close();
						$(this).trigger("reset");
					}, 1000);
				}
			});
		});
	});


	$(window).load(function () {
		$('.top_header').animated('fadeInDown', 'fadeInDown');
		$('.tabs_header .wrapper').animated('fadeInUp', 'fadeInUp');
		$('.profi_item').animated('fadeInRight', 'fadeInRight');
		$('.s_knowledge h2').animated('fadeInUp', 'fadeInUp');
		$('.s_knowledge .button').animated('pulse', 'pulse');
		$('.s_questions').animated('fadeInUp', 'fadeInUp');
		$('.s_questions .button').animated('pulse', 'pulse');
	});
});

