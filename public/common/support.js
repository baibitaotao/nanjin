//本脚本只是进行类型/值转换，格式化等问题

//只读信息转换
function OnlyReadFormate(value){
	if(value == "0"){
		return "读写";
	}else{
		return "只读";
	}
}

//申请状态格式化
//function ApplyStatusFormate(value){
	
	
//}


//Jquery ui AutoComplete所需要的方法  start
function autoCompleteKeyDown(event){
if ( event.keyCode === $.ui.keyCode.TAB && $( this ).data( "ui-autocomplete" ).menu.active ) {
			 event.preventDefault();
			 }

if ( event.keyCode === $.ui.keyCode.Enter && $( this ).data( "ui-autocomplete" ).menu.active ) {
	 event.preventDefault();
	 }

}
function split( val ) {
	 return val.split(/,\s*/);
	 }

function extractLast( term ) {
	 return split( term ).pop();
	 }
//Jquery ui AutoComplete所需要的方法   end  