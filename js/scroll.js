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
	// console.log(h, b);
	// let's calculate the scroll position
	// ( body.scrollTop / ( body.scrollHeight - document.height ) ) * 100
	// multiplying by 100 here gives us a percent value
	scroll = ( h[st] || b[st] ) / ( ( h[sh] || b[sh] ) - h.clientHeight ) * 100;
	
	// set our variable for CSS to use
	htop.style.setProperty('--scroll', scroll + '%');
	hbot.style.setProperty('--scroll', scroll + '%');
	vleft.style.setProperty('--scroll', scroll + '%');
	vright.style.setProperty('--scroll', scroll + '%');
});