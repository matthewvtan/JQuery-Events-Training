console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $('#imperatives span').on('click',
    function () {
      $('ul').append('<li><span class="orders">Orders: </span>' + $(this).text() + '<br><span class="orders">Issued: </span>' + new Date() + '</li><br><br>' );

  });
});
