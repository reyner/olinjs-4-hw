$(function () {
  $('#composeTweetForm').on('submit', function () {
    $.post("/tweets", $('#composeTweetForm').serialize());
    return false;
  })

  var twRefresh = function(){
    $.get('/tweets/list', function(data) {
      $('#twStream').html(data);
    });
  };
  
  setInterval(twRefresh, 2000);
})