$(document).ready(function(){
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



/*Header Menu*/
if (window.matchMedia('(min-width: 768px)').matches){
  $('.links>li').hover(function(){ 
    $('.dropdown-toggle', this).trigger('click'); 
  });
}
if (window.matchMedia('(max-width: 768px)').matches){
  $(".links .dropdown-toggle").click(function(e){
    e.preventDefault();
    $(".links .open .dropdown-menu").not($(this).next(".dropdown-menu")).slideUp();
    $(this).next(".dropdown-menu").slideToggle();
  });
};


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

/*Filter*/
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


//INDEX-2 ITEMS
$(".i2-item").hover(function(){
    $(".i2-item").css("z-index", 2);
    $(this).css("z-index", 4);
}, function(){
    $(this).css("z-index", 3);
});
$(".i2-item-wrap[data-usage=reload-temp]").hide();
$(".i2-item .item-reload").click(function(e){
  e.preventDefault();
  var prev = $(this).closest(".i2-item-wrap");
  var next = prev.parent().children("[data-usage=reload-temp]");
  prev.attr("data-usage", "reload-temp").addClass("animateBigger");
  
  next.fadeIn(300);
  prev.fadeOut(250, function(){
    prev.removeClass("animateBigger");
  });

});



//INDEX SCROLL EFFECTS
// $(window).load(function(){
// var hT = $('.i2-wrap').offset().top,
//     hH = $('.i2-wrap').outerHeight(), 
//     wH = $(window).height();
// var $w = $(window).scroll(function(){ 
//     var wS = $(this).scrollTop();
//   /*i2*/
//   if ( wS > (hT-hH+wH) ) {
//       $(".i2-wrap").css("top");
//   } else {
//       $(".i2-wrap").css("top", 0).css("opacity","1");
//       console.log( wS + " " + " - (" + hT + ' - ' + hH + " + " + wH + " )" );
//   }
//   /*i5*/
//   // if ( $w.scrollTop() < targetOffset2 - 650 ) {
//   //     $(".i5").css("opacity", $w.scrollTop()/(targetOffset2) + 0.1);
//   //     console.log( $w.scrollTop() + " / (" + targetOffset2 + " - " + 650 + ") + " + 0.1 + " = " + ($w.scrollTop()/(targetOffset2) + 0.1));
//   // } else {
//   //     $(".i5").css("opacity","1");
//   // }
// });
// $(".i2-wrap").css("top", 0 - (hT-hH+wH));

// });

// window.sr = ScrollReveal({
//   origin: 'bottom',
//   reset: true,
//   duration: 1000,
//   scale: 1,
//   distanse: "100px",
//   viewFactor: 0.2
// });
// sr.reveal('.i2-wrap');
// sr.reveal('.i5', {
//   distanse: "40px",
//   viewFactor: 0.5
// });
// sr.reveal(".i4-item:nth-child(1)", {
//   delay: 300,
//   viewFactor: 0.4
// });
// sr.reveal(".i4-item:nth-child(2)", {
//   delay: 200,
//   viewFactor: 0.4
// });
// sr.reveal(".i4-item:nth-child(3)", {
//   delay: 100,
//   viewFactor: 0.4
// });
// sr.reveal(".i4-item:nth-child(4)", {
//   delay: 0,
//   viewFactor: 0.4
// });






});
