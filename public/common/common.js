//\u53D6\u5F97\u96C6\u6210\u7F16\u8F91\u5668\u7684\u9875\u9762
function getEditWin(curWin){
	var obj = curWin;
	if(typeof obj.integrationEditorId === "undefined"){
		if(obj.parent != null){
			if(obj.location.href != obj.parent.location.href){
				return getEditWin(obj.parent);
			}else{
				return null;
			}
		}
		return obj;
	}else{
		return obj;
	}
}
			
//\u53D6\u5F97\u5217\u8868\u7684\u9875\u9762
function getListviewWin(curWin){
	var obj = curWin;
	if(typeof obj.listviewId === "undefined"){
		if(obj.parent != null){
			if(obj.location.href != obj.parent.location.href){
				return getListviewWin(obj.parent);
			}else{
				return null;
			}
		}
		return obj;
	}else{
		return obj;
	}
}

//\u6839\u636E\u9875\u9762\u6807\u8BC6\u53D6\u5F97\u9875\u9762
function getPageWin(pageId, curWin) {
	var obj = getParentPageWin(pageId, curWin);
	return obj;
}

function getParentPageWin(pageId, curWin) {
	var obj = curWin;
	if (typeof obj.pageId === "undefined" || obj.pageId != pageId) {
		if (obj.parent != null) {
			if (obj.location.href != obj.parent.location.href) {
				return getPageWin(pageId, obj.parent);
			} else {
				return null;
			}
		}
		return obj;
	} else {
		return obj;
	}
}

function getChildPageWin(pageId, curWin) {
	var iframes = $("iframe", curWin.document);
	for(var i=0;i<iframes.length;i++){
		var obj = iframes[i].contentWindow;
		if (typeof obj.pageId === "undefined" || obj.pageId != pageId) {
			return getChildPageWin(pageId, obj);
		}else{
			return obj;
		}
	}
	return null;
}

function createWindow(width, height, title, url, scrolling, closeFn){
	var divId = openWindowByDivId('', width, height, title, url, scrolling, closeFn);
	return divId;
}

var windowStrack = [];
function openWindowByDivId(divId, width, height, title, url, scrolling, closeFn){
	if(scrolling == null || scrolling == ''){
		scrolling = "auto";
	}
	var clientWidth = $(document).width();
	var clientHeight = $(document).height();
	if(clientWidth < width){
		width = clientWidth;
	}
	if(clientHeight < height){
		height = clientHeight - 50;
	}
	
	var left = (clientWidth - width) / 2;
	var top = (clientHeight - height) / 2;
	
	 
	var scrollTop = $(document).scrollTop();
	if(scrollTop>0 || clientHeight>650){ //如果有滚动条的选择，则TOP的显示就等于当前滚动条位置
		top = scrollTop;  
	}
	
	
	if(!divId || $.trim(divId) == ''){
		divId = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}
	
	if($('#'+divId).length < 1){
		var html = '<div id="'+divId+'"></div>';
		$(html).appendTo("body");
	}
	
	$('#'+divId).window({
		left:left,
		top:top,
		width:width,
		height:height,
		title:title,
		modal:true,
		collapsible:false,
		minimizable:false,
		maximizable:false,
		loadingMessage:'正在载入...',
		content : '<iframe width="100%" height="100%" scrolling="'+scrolling+'" frameborder=0 src="'+url+'">',
		onOpen : function(){
			windowStrack.push(divId);
			try{
				windowOpenAfter();
			}catch(e){
				
			}
		},
		onMove : function(curleft,curtop){
			if(curleft < 0 || curtop < 0){
				$(this).panel('move',{
				    left : left,
				    top : top
				}); 
			}
		},
		onClose : function(){
			windowStrack.pop();
			if(closeFn){
				closeFn.apply(this);
			}
		}
	});
	return divId;
}

function openWindowByDivId1(divId, width, height, title, url, scrolling, closeFn,topPosition){
	if(scrolling == null || scrolling == ''){
		scrolling = "auto";
	}
	var clientWidth = $(window).width();
	var clientHeight = $(window).height();
	if(clientWidth < width){
		width = clientWidth;
	}
	if(clientHeight < height){
		height = clientHeight - 50;
	}
	var left = (clientWidth - width) / 2;
	var top = topPosition;
	$('#'+divId).window({
		left:left,
		top:top,
		width:width,
		height:height,
		title:title,
		modal:true,
		collapsible:false,
		minimizable:false,
		maximizable:false,
		loadingMessage:'\u6B63\u5728\u8F7D\u5165...',
		content : '<iframe width="100%" height="100%" scrolling="'+scrolling+'" frameborder=0 src="'+url+'">',
		onOpen : function(){
			try{
				windowOpenAfter();
			}catch(e){
				
			}
		},
		onMove : function(curleft,curtop){
			if(curleft < 0 || curtop < 0){
				$(this).panel('move',{
				    left : left,
				    top : top
				}); 
			}
		},
		onClose : closeFn
	});
}

function appendParams(url, params) {
	var newUrl = url;
	if (url.indexOf("?") == -1) {
		newUrl = newUrl + "?";
	} else {
		newUrl = newUrl + "&";
	}
	if ($.isPlainObject(params)) {
		newUrl += $.param(params);
	} else {
		newUrl += params;
	}
	return newUrl;
}

function closeWindow(openWindowId) {
	if(openWindowId!=null && openWindowId!=''){
		$('#' + openWindowId).window('close');
	}else{
		$('#openWindow').window('close');
	}
}

function closeWindow2() {
	var divId = windowStrack[windowStrack.length-1];
	closeWindowByDivId(divId);
}

function closeWindowByDivId(openWindowId) {
	$('#' + openWindowId).window('close');
}

//\u6839\u636E\u6D88\u606F\u6A21\u677F\u751F\u6210\u6D88\u606F
//alert(getMessage('Msg1'));
//alert(getMessage('Msg1', 'cuijie'));
//alert(getMessage('Msg1', 'cuijie,2010-11-11'));
//alert(getMessage('Msg2'));
//alert(getMessage('Msg3'));
function getMessage(pattern, params) {
	var str = '';
	if(params){
		str = '"'+pattern+'","'+params+'"';
	}else{
		str = '"'+pattern+'"';
	}
	var beanShell = 'com.founder.cisscommon.util.MessageResourceHelper.getMessage('+str+')';
	var result = null;
	$.ajax({
		url: '../action/jsonView!execBeanShell.action',
		async: false,
		data:{
			beanShell:encodeURIComponent(beanShell)
		},
		success: function(data) {
			result = eval('('+data+')');
		}
	});
	return result;
}

function alertMessage(message, fn){
	$.messager.defaults.ok = "\u786E\u5B9A";
	$.messager.alert('\u63D0\u793A',message,'info',fn);
}

function confirmMessage(message, fn){
	$.messager.defaults.ok = "\u786E\u5B9A";
	$.messager.defaults.cancel = "\u53D6\u6D88";
	$.messager.confirm('\u63D0\u793A', message, fn);
}

//\u6253\u5F00tab\u9875\u7B7E
function addTabForUser(title,id,url,myTitle,hasScroll,closeFn){
	if(typeof(parent.window.addTab)!='undefined' && typeof(parent.window.addTab)){
		parent.window.addTab(title,id,url,myTitle,hasScroll,closeFn);
		parent.window.$("#"+id)[0].style.border = "1px solid rgb(23, 98, 166)";
		$(parent.window.$("#"+id)[0]).attr("border-bottom","0px solid #ffffff");
		parent.window.$("#"+id)[0].style.width = "99.7%";
	}else if(typeof(parent.parent.window.addTab)!='undefined' && typeof(parent.parent.window.addTab)){
		parent.parent.window.addTab(title,id,url,myTitle,hasScroll,closeFn);
		parent.parent.window.$("#"+id)[0].style.border = "1px solid rgb(23, 98, 166)";
		$(parent.parent.window.$("#"+id)[0]).attr("border-bottom","0px solid #ffffff");
		parent.parent.window.$("#"+id)[0].style.width = "99.7%";
	}else if(typeof(parent.parent.parent.window.addTab)!='undefined' && typeof(parent.parent.parent.window.addTab)){
		parent.parent.parent.window.addTab(title,id,url,myTitle,hasScroll,closeFn);
		parent.parent.parent.window.$("#"+id)[0].style.border = "1px solid rgb(23, 98, 166)";
		$(parent.parent.parent.window.$("#"+id)[0]).attr("border-bottom","0px solid #ffffff");
		parent.parent.parent.window.$("#"+id)[0].style.width = "99.7%";
	}else{
		alert("\u6CA1\u6709\u627E\u5230\u6307\u5B9A\u7684js\u65B9\u6CD5");
	}         
}


//\u663E\u793A\u7801\u8868\u4E2D\u7684\u63CF\u8FF0
//parentId:\u7801\u8868id,fieldId:slect\u7684id
function viewCodeDesc(parentId,fieldId){
	var fTypeId = '#'+fieldId;
	var selCodeValue = $(fTypeId).val();
	$.ajax({
		url : "/eiweb/ente/findCodeDescByValue.action",
		data:{
			codeParentId:parentId,
			codeValue:selCodeValue
		},
		method : "post",
		dataType : "json",
		success : function(data) {
			$(fTypeId).attr("title",'');
			if(data !=''){
				$(fTypeId).attr("title",data);	
			}
		}
	});
}