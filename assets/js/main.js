AOS.init({
  duration: 1200
});
// Nav menu

var hamburger = document.querySelector('i.fa-bars');
var collapsibleNav = document.querySelector('#collapsible-nav');
var navLinks = document.querySelectorAll('a.nav-link');
var isVisible = collapsibleNav.dataset.visible === 'visible';

hamburger.addEventListener('click', function() {
  var collapsibleNav = document.querySelector('#collapsible-nav');
  var navLinks = document.querySelectorAll('a.nav-link');
  var isVisible = collapsibleNav.dataset.visible === 'visible';

  if(isVisible) {
    collapsibleNav.classList.remove('display');
    collapsibleNav.setAttribute('data-visible', 'hidden');
  } else {
    collapsibleNav.classList.add('display');
    collapsibleNav.setAttribute('data-visible', 'visible');
  }
});

// Smoothscroll

var links = document.querySelectorAll('a.scroll');

function smoothscroll() {
  var toGo = this.getAttribute("href");
	collapsibleNav.classList.remove('display');
  collapsibleNav.setAttribute('data-visible', 'hidden');
  document.querySelector(toGo).scrollIntoView({ behavior: 'smooth' });
  //console.log(this);
}

navLinks.forEach(link => link.addEventListener('click', smoothscroll));
