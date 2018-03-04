$(function(){
 $('.menu').find('li').click(function(){
 var index = $(this).index();
 $(this).addClass('firstpage').siblings().removeClass('firstpage');
 $('.content .tab').find('dt').eq(index).show().siblings().hide();
 })
 })