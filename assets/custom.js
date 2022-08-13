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
 });