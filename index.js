$(function () {
  $('#menu-content a[href]').on('click', function (event) {
    $('#menu-input').trigger('click');
  });
})