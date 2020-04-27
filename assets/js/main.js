// show hide navigation menu
var lastscrollTop = 0;
navbars = document.getElementById('show-hide-nav');
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYoffest || document.documentElement.scrollTop;
  if (scrollTop > lastscrollTop) {
    navbars.style.top = '-120px';
  } else {
    navbars.style.top = '0';
  }
  lastscrollTop = scrollTop;
});