$(function () {
  if ($("#uid").val() == 0) {
    $.get('/users/new', function(data) {
      $('#leftNav').html(data);
    });
  }

  $('#composeTweetForm').on('submit', function () {
    if ($('#tweetInput').val().length > 140) {
      $('#failure').show();
    } else {
      $.post("/tweets", $('#composeTweetForm').serialize());
      $('#success').show();
    }
    return false;
  })

  var twRefresh = function(){
    $.get('/tweets/list', function(data) {
      $('#StreamBody').html(data);
    });
  };
  
  setInterval(twRefresh, 2000);
})