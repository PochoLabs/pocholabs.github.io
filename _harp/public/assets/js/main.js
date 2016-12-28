console.log('You have work to do...');

// Nav menu

var hamburger = document.querySelector('i.fa-bars');
var collapsibleNav = document.querySelector('#collapsible-nav');
var navLinks = document.querySelectorAll('a.nav-link');

hamburger.addEventListener('click', function() {
  var isVisible = this.dataset.visible === 'visible';
  console.log('hamburger clicked');

  if(isVisible) {
    console.log('hide nav');
    collapsibleNav.classList.remove('display');
    this.setAttribute('data-visible', 'hidden');
  } else {
    console.log('make visible');
    collapsibleNav.classList.add('display');
    this.setAttribute('data-visible', 'visible');
  }
});

navLinks.forEach(link => link.addEventListener('click', function(){
  console.log('hide nav');
  collapsibleNav.classList.remove('display');
  collapsibleNav.setAttribute('data-visible', 'hidden');
}));
