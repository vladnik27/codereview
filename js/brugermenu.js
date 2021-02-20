$(document).ready(function() {
  $('.header__bruger').on('click', function(event) {
    $('.header__bruger, .menu').toggleClass('menu--active');
  });
});