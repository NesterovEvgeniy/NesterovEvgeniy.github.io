$(document).ready(function() {
  $('#form').submit(function() {
    if (document.forms.namedItem.value == '' || document.forms.value == '') {
      valid = false;
      return valid;
    }
    $.ajax ({
      type: "POST",
      url: "../../sendmail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find('input').val('');
      $('#form').trigger('reset')
    });
    return false;
  });
});