$(document).ready(function() {
  $('#first_form').submit(function(e) {
    e.preventDefault();
    var password = $('#password').val();
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    $(".error").remove();

    if (password.length< 6) {
      $('#password').after('<span class="error">Пароль должен быть не менее 6 символов</span>');
    }
    if (password.search(/\d/) != -1 ){

    }
    else{
      $('#password').after('<span class="error">Пароль должен содержать хотя бы одну цифру</span>');
    }
    if(password.match(/[A-Z]/)){

    }
    else {
      $('#password').after('<span class="error">Пароль должен содержать хотя бы одну заглавную букву</span>');
    }
    if (password.match(format)){

    }
    else{
      $('#password').after('<span class="error">Пароль должен содержать хотя бы один спецсимвол</span>');
    }
    }
  );
});
