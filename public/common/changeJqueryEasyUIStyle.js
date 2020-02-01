//根据项目要求修改样式
$(function(){
	var style = $("<link rel=\"stylesheet\" type=\"text/css\" href=\"../style/common/changeJqueryEasyUIStyle.css\"></link>");
	style.appendTo("head");
});

function windowOpenAfter(){
	
}

function windowOpenAfter_bak(){
	$(".window").css("border","none");
	$(".window").css("background","none");
	$(".window").css("border-top","0px");
	$(".window").css("border-bottom","0px");	
	$(".window").css("border-left","0px");	
	$(".window").css("border-right","0px");
	$(".window").css("padding-bottom","0px");	
	$(".window").css("padding-left","0px");	
	$(".window").css("padding-right","0px");
	$(".window").css("padding-top","0px");
	$(".window").css("border-radius","5px 5px 0px 0px");
	
	$(".window-header").css("background","#F8F8F8");
	
	$(".window-shadow").css("display","none");
	
	$(".window .panel-title").css("font-family","微软雅黑");
	$(".window .panel-title").css("padding-top","8px");
	$(".window .panel-title").css("padding-left","10px");
	$(".window .panel-title").css("color","#000000");
	$(".window .panel-title").css("background","#F8F8F8");
	
	$(".window .panel-title .plan-tool .panel-tool-close").attr("style","background-color:#F8F8F8;margin-top: 0px; margin-right: -1px");
}