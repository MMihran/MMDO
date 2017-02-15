
// Plus/Minus

$('.count-minus').click(function(e) {
   e.preventDefault();
   $( this ).next().val(function(i, oldval) {
      if (oldval > 1)
         return --oldval;
         return 1;
   });
});

$('.count-plus').click(function(e) {
   e.preventDefault();
   $( this ).prev().val(function(i, oldval) {
      if (oldval < 999)
         return ++oldval;
      return 999;
   });
});

/*del*/
$('.basket-item .del').click(function(e) {
   e.preventDefault();
   var hidden = $( this ).parent().parent().parent();
   hidden.addClass("scale-hide");
   setTimeout(function(){
   	 hidden.detach();
   }, 500)
});