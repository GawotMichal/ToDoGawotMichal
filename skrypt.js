$(function(){

  var $list = $('ul');
  var $addForm = $('.addForm');
  var $el = $('#el').val();
  var $addBtn = $('#addBtn');
  var $cool = $('#cool');
  var $hot = $('#hot');

  $addBtn.on('click', function(e){
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li class="cool">' + text + '</li>');

  });

  $list.on('dblclick', 'li', function() {
    var $this = $(this);
    var complete = $this.hasClass('done');

    if (complete === true) {
      $this.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {
        $this.remove();
      });
    } else {
      item = $this.text();
      $this.remove();
      $list
        .append('<li class=\"done\">' + item + '</li>')
        .hide().fadeIn(300);
    }
  });
    $list.on('click', 'li', function(){
      $ten = $(this);
      $ten.addClass('hot');
    });
});
