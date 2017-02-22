
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



/*Range*/
if ($("#range_start").attr("id")) {
var $range = $("#example_id"),
    $input_from = $("#range_start"),
    $input_to = $("#range_end"),
    instance,
    min = 0,
    max = 30000;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 500,
    to: 16590,
    onStart: function (data) {
        $input_from.prop("value", data.from);
        $input_to.prop("value", data.to);
    },
    onChange: function (data) {
        $input_from.prop("value", data.from);
        $input_to.prop("value", data.to);
    }
});

instance = $range.data("ionRangeSlider");

$input_from.on("change keyup", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    } else if (isNaN(val)){
        val = min;
    }
        
    instance.update({
        from: val
    });
});

$input_to.on("change keyup", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    } else if (isNaN(val)){
        val = min;
    }
    
    instance.update({
        to: val
    });
});
}


$(".catalog .menu").click(function(){
  if (!$(".filter").hasClass("filter-open")) {
    $(".filter").show("slow");
    $(".filter").addClass("filter-open");
  }else if($(".filter").hasClass("filter-open")){
    $(".filter").hide("slow", function(){
        $(".filter").removeClass("filter-open");
    });
    
  }
});