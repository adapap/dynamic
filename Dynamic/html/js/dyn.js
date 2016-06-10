$(document).ready(function(){
    var $a1 = $("#a1");
    var $a2 = $("#a2");
    var $a3 = $("#a3");
    var $l1 = $("#l1");
    var $l2 = $("#l2");
    var $l3 = $("#l3");
    $("#l1").fadeOut(300);
  $a1.click(function(){
        $l2.removeClass("active");
        $l3.removeClass("active");
        $l1.addClass("active");
            });
  $a2.click(function(){
        $l1.removeClass("active");
        $l3.removeClass("active");
        $l2.addClass("active");
            });
  $a3.click(function(){
        $l1.removeClass("active");
        $l2.removeClass("active");
        $l3.addClass("active");
            });
  });