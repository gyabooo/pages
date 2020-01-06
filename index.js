$(function () {
  $(window).resize(function () {
    if (window.innerWidth < 812) {
      $('#menu-content a[href]').on('click', function (event) {
        $('#menu-input').trigger('click');
      });
    }
  })
})