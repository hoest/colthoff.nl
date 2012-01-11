/* Author:

*/

$(function() {
  $('header').click(function() {
    location.href = 'http://www.colthoffcommunicatie.nl/';
  }).css({
    'cursor': 'pointer'
  });

  $('#beginners').click(function() {
    window.open('http://www.colthoffcommunicatie.nl/pivotx/templates/colthoff.nl/pdf/training-beginners.pdf');
  }).css({
    'cursor': 'pointer'
  }).attr('title', 'Presentatietraining voor beginners');

  $('#gevorderd').click(function() {
    window.open('http://www.colthoffcommunicatie.nl/pivotx/templates/colthoff.nl/pdf/training-gevorderden.pdf');
  }).css({
    'cursor': 'pointer'
  }).attr('title', 'Presentatietraining voor gevorderden');

  $('.pivotx-download').each(openInNewWindow);
  $('.external').each(openInNewWindow);
});

openInNewWindow = function(index, value) {
  $(value).click(function() {
    window.open($(this).attr('href'));
    return false;
  });
}

validate = function(formObj) {
  var valid = true;
  $(formObj).find('.required').each(function(index, value) {
    if($(value).val() == '') {
      valid = false;
      $(value).css('border-color', '#dd0000');
    }
  });

  if(!valid) {
    alert('U heeft niet alle verplichte velden ingevoerd.');
  }

  return valid;
}