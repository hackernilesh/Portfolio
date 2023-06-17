var h = document.documentElement,
	 b = document.body,
	 st = 'scrollTop',
	 sh = 'scrollHeight',
	 htop = document.querySelector('.progress-bar.horizontal.top'),
	 hbot = document.querySelector('.progress-bar.horizontal.bottom'),
	 vleft = document.querySelector('.progress-bar.vertical.left'),
	 vright = document.querySelector('.progress-bar.vertical.right'),
	 scroll;

document.addEventListener('scroll', function() {
	scroll = ( h[st] || b[st] ) / ( ( h[sh] || b[sh] ) - h.clientHeight ) * 100;
	htop.style.setProperty('--scroll', scroll + '%');
	hbot.style.setProperty('--scroll', scroll + '%');
	vleft.style.setProperty('--scroll', scroll + '%');
	vright.style.setProperty('--scroll', scroll + '%');
});