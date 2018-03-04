$(document).ready(function(){
  
$(".shade1").mouseenter(function(){
    $(".shade1").hide();
    $(".weibo").mouseleave(function(){
    	$(".shade1").show();
    });   
  });

$(".shade2").mouseenter(function(){
    $(".shade2").hide();
    $(".email").mouseleave(function(){
      $(".shade2").show();
    });   
  });

$(".shade3").mouseenter(function(){
    $(".shade3").hide();
    $(".return").mouseleave(function(){
      $(".shade3").show();
    });   
  });



});