
$('.btnOne').on("click", function(){
  event.preventDefault();
  $('.boxOne').addClass('active');
})

$('.btnTwo').on('click', function(){
  var x = $('input').val();
  var y = x.length;
  $('h1').text(y);
})
