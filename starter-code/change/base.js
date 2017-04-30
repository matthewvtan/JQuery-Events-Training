console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('#left, #right').on('change', function(){
      var left = parseInt($('#left').val());
      var right = parseInt($('#right').val());
  $('#total').val(left + right);
  });

  $('#reset').on('click', function(){
    $('#left').val(undefined);
    $('#right').val(undefined);
    $('#total').val(undefined);
  });
});
