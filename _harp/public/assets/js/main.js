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

navLinks.forEach(link => link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('hide nav');
  collapsibleNav.classList.remove('display');
  collapsibleNav.setAttribute('data-visible', 'hidden');
  console.log(e);

  var hash = e.srcElement.hash;
  var target = document.querySelector(hash);

  animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 1000, true);
}));


function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
          elem[style] = from+unit;
    } else {
          elem.style[style] = from+unit;
    }
}
