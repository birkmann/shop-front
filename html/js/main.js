var el = document.querySelector('header.main .menu-toggle');
el.onclick = function() {
	document.querySelector('body').classList.toggle('show-menu');
}