$(document).ready(function () {
	// $('.toTop').on('click', function (e) {
	//   e.preventDefault();
	//   $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
	// 	scrollTop: 0,
	//   }, 700)
	// });
	$('ul').on('click','li a.menu-item-link', function (e) {
		let href = $(this).attr('href');
		let position = href.search("#");
		if(position == 0) {
			e.preventDefault();
			const anchor = $(this).attr('href');
			const linkScroll = $(anchor).offset().top;
			$('html,body').stop().animate({ 
				scrollTop: linkScroll -43
			},700);
		}
	});

	if($(".similar_projects .mySwiper").length) {
		var swiper = new Swiper(".similar_projects .mySwiper", {
			slidesPerView: 3.5,
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				375: {
					slidesPerView: 1
				},
				425: {
					slidesPerView: 1
				},
				500: {
				  slidesPerView: 1
				},
				1024: {
				  slidesPerView: 3.5
				}
			  }
		});

		$('.similar_projects .slide-image').mouseover(function() {
			$(this).find('img').css('display', 'none');
			$(this).find('.btn-see-detail').css('display', 'block');
		});
		$('.similar_projects .slide-image').mouseout(function() {
			$(this).find('img').css('display', 'block');
			$(this).find('.btn-see-detail').css('display', 'none');
		});
	}

	$('.more-articles a.btn_more-articles').on('click', function() {
		$('.blog-boday .article .article-block.visible-false').css('display', 'block');
		$(this).css('display', 'none');
	});
});