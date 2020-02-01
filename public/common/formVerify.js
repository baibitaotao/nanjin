var notNull = []; // ok
var notRepeat = []; // ok
var isInt = []; // ok
var isPositiveInt = [];// OK
var isNumber = []; // ok
var isDate = [];

var isNumorAlp = []; // ok
var isEmail = []; // ok
var isIDCard1518 = []; // ok
var isFixedTel = []; // ok

var compare = []; // ok
var numberScale = []; // ok
var mobilePhone = []; // ok
var maxLength = []; // ok
var minLength = []; // ok
var equalsLength = []; // ok
var maxValue = []; // ok
var minValue = []; // ok
// \u5728Comboxbox\u4E0B\u62C9\u6570\u636E\u96C6\u4E2D
var isComboboxItems = []; // ok
$(function() {
	$
			.extend(
					$.fn.validatebox.defaults.rules,
					{
						formVerify : {
							validator : function(value, param) {
								var objName = param[0];
								for (var i = 0; i < notNull.length; i++) {
									if (objName == notNull[i]) {
										var resultObj = checkNotNull(notNull[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < isInt.length; i++) {
									if (objName == isInt[i]) {
										var resultObj = checkIsInt(isInt[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < isPositiveInt.length; i++) {
									if (objName == isPositiveInt[i]) {
										var resultObj = checkIsPositiveInt(isPositiveInt[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < isNumber.length; i++) {
									if (objName == isNumber[i]) {
										var resultObj = checkIsNumber(isNumber[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < isNumorAlp.length; i++) {
									if (objName == isNumorAlp[i]) {
										var resultObj = checkIsNumorAlp(isNumorAlp[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < isEmail.length; i++) {
									if (objName == isEmail[i]) {
										var resultObj = checkIsEmail(isEmail[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < mobilePhone.length; i++) {
									if (objName == mobilePhone[i]) {
										var resultObj = checkMobilePhone(mobilePhone[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < isIDCard1518.length; i++) {
									if (objName == isIDCard1518[i]) {
										var resultObj = checkIsIDCard1518(isIDCard1518[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < isFixedTel.length; i++) {
									if (objName == isFixedTel[i]) {
										var resultObj = checkIsFixedTel(isFixedTel[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (i = 0; i < compare.length; i++) {
									if (objName == compare[i][0]
											|| objName == compare[i][1]) {
										var resultObj = checkCompare(
												compare[i][0], compare[i][1],
												compare[i][2]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (i = 0; i < numberScale.length; i++) {
									if (objName == numberScale[i][0]) {
										var resultObj = checkNumberScale(
												numberScale[i][0],
												numberScale[i][1],
												numberScale[i][2]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < maxLength.length; i++) {
									if (objName == maxLength[i][0]) {
										var resultObj = checkMaxLength(
												maxLength[i][0],
												maxLength[i][1]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < minLength.length; i++) {
									if (objName == minLength[i][0]) {
										var resultObj = checkMinLength(
												minLength[i][0],
												minLength[i][1]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (var i = 0; i < equalsLength.length; i++) {
									if (objName == equalsLength[i][0]) {
										var resultObj = checkEqualsLength(
												equalsLength[i][0],
												equalsLength[i][1]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (i = 0; i < maxValue.length; i++) {
									if (objName == maxValue[i][0]) {
										var resultObj = checkMaxValue(
												maxValue[i][0], maxValue[i][1]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (i = 0; i < minValue.length; i++) {
									if (objName == minValue[i][0]) {
										var resultObj = checkMinValue(
												minValue[i][0], minValue[i][1]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								for (i = 0; i < notRepeat.length; i++) {
									if (objName == notRepeat[i][0]) {
										var resultObj = checkExist(
												notRepeat[i][0],
												notRepeat[i][1],
												notRepeat[i][2],
												notRepeat[i][3],
												notRepeat[i][4]);
										if (resultObj.result) { // \u5B58\u5728\u8868\u793A\u6821\u9A8C\u5931\u8D25
											param[1] = resultObj.message;
											return !resultObj.result;
										}
									}
								}
								for (var i = 0; i < isComboboxItems.length; i++) {
									if (objName == isComboboxItems[i]) {
										var resultObj = checkIsComboboxItems(isComboboxItems[i]);
										if (!resultObj.result) {
											param[1] = resultObj.message;
											return resultObj.result;
										}
									}
								}
								return true;
							},
							message : '{1}'
						}
					});
	addValidate(); // \u7ED9\u5B57\u6BB5\u52A0\u4E0A\u8F83\u9A8C
});

// \u7ED9\u67D0\u4E00\u4E2A\u5B57\u6BB5\u52A0\u4E0A\u6821\u9A8C
function addValidateByName(objName) {
	var comboboxName = {};
	var selectElems = $(".combobox-f.combo-f");
	for (var i = 0; i < selectElems.length; i++) {
		var name = $(selectElems[i]).attr("comboname");
		comboboxName[name] = selectElems[i];
	}

	var $objs = $("input[name='" + objName + "'],select[name='" + objName
			+ "']" + ",textarea[name='" + objName + "']");
	for (var i = 0; i < $objs.length; i++) {
		var $obj = $($objs[i]);
		var itemName = getItemName($obj);
		if (comboboxName[objName] != undefined) { // combobox
			if (objName != undefined && objName != "") {
				for (var j = 0; j < notNull.length; j++) {
					if (objName == notNull[j]) {
						$(comboboxName[objName]).combobox({
							required : true,
							missingMessage : itemName + "\u4E0D\u80FD\u4E3A\u7A7A"
						});
					}
				}
				$(comboboxName[objName]).combobox({
					validType : "formVerify['" + objName + "','']"
				});
			}
		} else {
			if (objName != undefined && objName != "") {
				$obj.validatebox({
					required : false
				});
				for (var j = 0; j < notNull.length; j++) {
					if (objName == notNull[j]) {
						$obj.validatebox({
							required : true,
							missingMessage : itemName + "\u4E0D\u80FD\u4E3A\u7A7A"
						});
					}
				}
				$obj.validatebox({
					validType : "formVerify['" + objName + "','']"
				});
			}
		}
	}
}

function addValidate() {
	var comboboxName = {};
	var selectElems = $(".combobox-f.combo-f");
	for (var i = 0; i < selectElems.length; i++) {
		var name = $(selectElems[i]).attr("comboname");
		comboboxName[name] = selectElems[i];
	}

	var $objs = $("input:not(:file),select,textarea");
	for (var i = 0; i < $objs.length; i++) {
		var $obj = $($objs[i]);
		var objName = $obj.attr("name");
		var itemName = getItemName($obj);
		if (comboboxName[objName] != undefined) { // combobox
			if (objName != undefined && objName != "") {
				for (var j = 0; j < notNull.length; j++) {
					if (objName == notNull[j]) {
						$(comboboxName[objName]).combobox({
							required : true,
							missingMessage : itemName + "\u4E0D\u80FD\u4E3A\u7A7A"
						});
					}
				}
				$(comboboxName[objName]).combobox({
					validType : "formVerify['" + objName + "','']"
				});
			}
		} else {
			if (objName != undefined && objName != "") {
				$obj.validatebox({
					required : false
				});
				for (var j = 0; j < notNull.length; j++) {
					if (objName == notNull[j]) {
						if ($.trim($obj.val()) == "") {
							$obj.val("");
						}
						$obj.validatebox({
							required : true,
							missingMessage : itemName + "\u4E0D\u80FD\u4E3A\u7A7A"
						});
					}
				}
				$obj.validatebox({
					validType : "formVerify['" + objName + "','']"
				});
			}
		}
	}
}

function validate() {
	var comboboxName = {};
	var selectElems = $(".combobox-f.combo-f");
	for (var i = 0; i < selectElems.length; i++) {
		var name = $(selectElems[i]).attr("comboname");
		comboboxName[name] = selectElems[i];
	}

	var $objs = $("input:not(:file),select,textarea");
	for (var i = 0; i < $objs.length; i++) {
		var $obj = $($objs[i]);
		var objName = $obj.attr("name");
		if (comboboxName[objName] != undefined) { // combobox
			if (objName != undefined && objName != "") {
				var isValid = $(comboboxName[objName]).combobox("isValid");
				if (!isValid) {
					return false;
				}
			}
		} else {
			if (objName != undefined && objName != "") {
				try {
					var isValid = $obj.validatebox("isValid");
					if (!isValid) {
						return false;
					}
				} catch (e) {

				}
			}
		}
	}
	return true;
}

// ////////////////////////////////////////////////////////////////////
function checkNotNull(objName) {
	var $obj = $("input[name='" + objName + "'],select[name='" + objName + "']"
			+ ",textarea[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if ((itemValue != null)) {
		if ($.trim(itemValue) != "") {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u4E0D\u80FD\u4E3A\u7A7A"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkIsInt(objName) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();

	if ((itemValue != null && itemValue != "")) {
		var IfTrue = itemValue.search(/^-?\d+$/) != -1;
		if (IfTrue) {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u5FC5\u987B\u662F\u6574\u6570"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}
/**
 * \u68C0\u67E5\u662F\u5426\u662F\u6B63\u6574\u6570
 */
function checkIsPositiveInt(objName) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();

	if ((itemValue != null && itemValue != "")) {
		var IfTrue = itemValue.search(/^[0-9]*[1-9][0-9]*$/) != -1;
		if (IfTrue) {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u5FC5\u987B\u662F\u6B63\u6574\u6570"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}
function checkIsNumber(objName) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if ((itemValue != null && itemValue != "")) {
		var IfTrue = itemValue.search(/^(-|\+)?\d+(\.\d+)?$/) != -1;
		if (IfTrue) {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u5FC5\u987B\u662F\u6570\u5B57"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkIsNumorAlp(objName) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if ((itemValue != null && itemValue != "")) {
		var IfTrue = itemValue.search(/^[A-Za-z0-9_]*$/) != -1;
		if (IfTrue) {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u5FC5\u987B\u662F\u5B57\u6BCD\u548C\u6570\u5B57\u7684\u7EC4\u5408"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkIsEmail(objName) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if ((itemValue != null && itemValue != "")) {
		var IfTrue = itemValue.search(/\w@\w*\.\w/) != -1;
		if (IfTrue) {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u4E0D\u662F\u6B63\u786E\u7684\u90AE\u4EF6\u683C\u5F0F"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkMobilePhone(objName) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	// 1\u5F00\u5934\u517111\u4F4D
	if ((itemValue != null && itemValue != "")) {
		var IfTrue = itemValue.search(/^(1[0-9]{10})$/) != -1;
		if (IfTrue) {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u4E0D\u662F\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801\u683C\u5F0F"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkIsFixedTel(objName) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if ((itemValue != null && itemValue != "")) {
		var IfTrue = itemValue.search(/^([0-9]|[-])+$/g) != -1;
		if (IfTrue) {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u4E0D\u662F\u6B63\u786E\u7684\u7535\u8BDD\u53F7\u7801\u683C\u5F0F"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkCompare(objName1, objName2, type) {
	var $obj1 = $("input[name='" + objName1 + "']");
	var itemName1 = getItemName($obj1);
	var itemValue1 = $obj1.val();

	var $obj2 = $("input[name='" + objName2 + "']");
	var itemName2 = getItemName($obj2);
	var itemValue2 = $obj2.val();

	var str_value1 = itemValue1;
	var str_value2 = itemValue2;
	if (str_value1 != "" && str_value2 != "") { // \u90FD\u6709\u503C\u65F6\u6BD4\u8F83\u624D\u6709\u610F\u4E49
		if (type == "number") {
			str_value1 = Number(str_value1);
			str_value2 = Number(str_value2);
		}
		if (str_value1 > str_value2) {
			return {
				result : false,
				message : itemName1 + "\u7684\u503C\u5FC5\u987B\u5C0F\u4E8E" + itemName2 + "\u7684\u503C"
			};
		} else {
			return {
				result : true,
				message : ""
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkMinLength(objName, length) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	var len = itemValue.length;
	if (len < length) {
		return {
			result : false,
			message : itemName + "\u957F\u5EA6\u6700\u5C0F\u4E3A" + length
		};
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkMaxLength(objName, length) {
	var $obj = $("input[name='" + objName + "'],select[name='" + objName + "']"
			+ ",textarea[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	var len = itemValue.length;
	if (len > length) {
		return {
			result : false,
			message : itemName + "\u957F\u5EA6\u6700\u5927\u4E3A" + length
		};
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkEqualsLength(objName, length) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if (checkMinLength(objName, length).result
			&& checkMaxLength(objName, length).result) {
		return {
			result : true,
			message : ""
		};
	} else {
		return {
			result : false,
			message : itemName + "\u957F\u5EA6\u5FC5\u987B\u4E3A" + length
		};
	}
}

function checkIsIDCard1518(objName) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if (checkEqualsLength(objName, 15).result
			|| checkEqualsLength(objName, 18).result) {
		return {
			result : true,
			message : ""
		};
	} else {
		return {
			result : false,
			message : itemName + "\u957F\u5EA6\u5FC5\u987B\u4E3A15\u4F4D\u621618\u4F4D"
		};
	}
}

function checkNumberScale(objName, length, scale) {
	// length\u6574\u6570\u4F4D\u6570\uFF0Cscale\u5C0F\u6570\u4F4D\u6570
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	var pointPos = itemValue.indexOf(".");
	var integerPart = 0;
	var decimalPart = 0;
	if (pointPos > 0) {
		integerPart = itemValue.substring(0, pointPos);
		decimalPart = itemValue.substring(pointPos + 1, itemValue.length);
	} else if (pointPos == 0) {
		integerPart = "";
		decimalPart = itemValue.substring(pointPos + 1, itemValue.length);
	} else {
		integerPart = itemValue;
		decimalPart = "";
	}

	var intPartLen = integerPart.length;
	var decPartLen = decimalPart.length;

	if (intPartLen > length) {
		return {
			result : false,
			message : itemName + "\u6574\u6570\u90E8\u5206\u7684\u957F\u5EA6\u6700\u5927\u4E3A" + length
		};
	}

	if (decPartLen > scale) {
		return {
			result : false,
			message : itemName + "\u5C0F\u6570\u90E8\u5206\u7684\u957F\u5EA6\u6700\u5927\u4E3A" + scale
		};
	}

	return {
		result : true,
		message : ""
	};
}

function checkMaxValue(objName, maxValue) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if ((itemValue != null && itemValue != "")) {
		value = Number(itemValue);
		if (value > maxValue) {
			return {
				result : false,
				message : itemName + "\u4E0D\u80FD\u5927\u4E8E" + maxValue
			};
		} else {
			return {
				result : true,
				message : ""
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function checkMinValue(objName, minValue) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if ((itemValue != null && itemValue != "")) {
		value = Number(itemValue);
		if (value < minValue) {
			return {
				result : false,
				message : itemName + "\u4E0D\u80FD\u5C0F\u4E8E" + minValue
			};
		} else {
			return {
				result : true,
				message : ""
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

var dealMark = ""; // \u5728IE\u4E0B\u4E0D\u52A0\u4E0D\u884C
var keyValues = ""; // \u5728IE\u4E0B\u4E0D\u52A0\u4E0D\u884C
function checkExist(objName, tableName, fieldName, filterWhere, springJndiId) {
	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var fieldValue = $obj.val();
	filterWhere = eval('(' + filterWhere + ')');
	var beanShell = 'com.founder.core.bizobject.util.BizObjectUtil.checkBizDataExist("'
			+ tableName
			+ '", "'
			+ fieldName
			+ '", "'
			+ trim(fieldValue)
			+ '", "' + filterWhere + '", "' + springJndiId + '")';
	// alert(beanShell);
	var result = null;
	$.ajax({
		url : '../action/jsonView!execBeanShell.action',
		async : false,
		data : {
			beanShell : encodeURIComponent(beanShell)
		},
		success : function(data) {
			var dataObj = eval('(' + data + ')');
			if (dataObj.result) {
				result = {
					result : true,
					message : itemName + "\u5DF2\u7ECF\u5B58\u5728"
				};
			} else {
				result = {
					result : false,
					message : itemName + "\u4E0D\u5B58\u5728"
				};
			}
		}
	});
	return result;
}

function checkIsComboboxItems(objName) {
	var comboboxName = {};
	var selectElems = $(".combobox-f.combo-f");
	for (var i = 0; i < selectElems.length; i++) {
		var name = $(selectElems[i]).attr("comboname");
		comboboxName[name] = selectElems[i];
	}

	var $obj = $("input[name='" + objName + "']");
	var itemName = getItemName($obj);
	var itemValue = $obj.val();
	if ((itemValue != null && itemValue != "")) {
		var datas = $(comboboxName[objName]).combobox("getData");
		var IfTrue = false;
		for (var i = 0; i < datas.length; i++) {
			if (datas[i].id == itemValue) {
				IfTrue = true;
			}
		}
		if (IfTrue) {
			return {
				result : true,
				message : ""
			};
		} else {
			return {
				result : false,
				message : itemName + "\u5FC5\u987B\u5728\u4E0B\u62C9\u6846\u4E2D\u5B58\u5728"
			};
		}
	} else {
		return {
			result : true,
			message : ""
		};
	}
}

function getItemName(jqueryObj) {
	var itemName = "";
	if (!jqueryObj.attr("itemname")) {
		itemName = (jqueryObj.attr("title") != undefined) ? jqueryObj
				.attr("title") : "";
		jqueryObj.attr("itemname", itemName);
	} else {
		itemName = jqueryObj.attr("itemname");
	}
	return itemName;
}

function trim(str) { //\u5220\u9664\u5DE6\u53F3\u4E24\u7AEF\u7684\u7A7A\u683C
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
