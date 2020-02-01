import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 大写显示
export function convertCurrency(money) {
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '元';
  //最大处理的数字
  var maxNum = 999999999999999.9999;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';
  //分离金额后用的数组，预定义
  var parts;
  if (money == '') {
    return '';
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != '') {
    var decLen = decimalNum.length;
    for (var i = 0; i < decLen; i++) {
      var n = decimalNum.substr(i, 1);
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

// 获取两个日期相差的工作小时(不包括节假日)
export function calculateDay(beginDate, endDate, beginTime, endTime) {
  var hour = 60 * 60 * 1000;
  var bTimeStr = beginTime.split(":");
  var eTimeStr = endTime.split(":");
  var bDate = new Date(beginDate);
  var eDate = new Date(endDate);
  var bTime = bTimeStr[0] * hour + bTimeStr[1] * 60 * 1000 + bTimeStr[2] * 1000;
  var eTime = eTimeStr[0] * hour + eTimeStr[1] * 60 * 1000 + eTimeStr[2] * 1000;
  var days = 0.0;
  var half = 0.5;
  var allDay = 1.0;
  var AM_UpHour = 8 * hour;
  var AM_DownHour = 12 * hour;
  var PM_UpHour = 13.5 * hour;
  var PM_DownHour = 17.5 * hour;
  //相隔天数
  var n = (eDate.getTime() - bDate.getTime()) / (hour * 24);
  if (n > 1) {
    days = n - 1;
  }
  //如果是同一天
  if (beginDate == endDate) {
    if (bTime < AM_DownHour) {
      if (eTime <= PM_UpHour) {
        days += half;
      } else {
        days += allDay;
      }
    } else {
      days += allDay;
    }
  }
  //不是同一天
  else {
    //计算开始的那一天的
    //如果开始时间<早上下班时间+1.0
    if (bTime < AM_DownHour) {
      days += allDay;
    }
    //如果是下午开始
    else {
      days += half;
    }
    //计算结束的那一天
    //如果是早上结束+0.5
    if (eTime <= PM_UpHour) {
      days += half;
    }
    //如果是下午结束+1.0
    else {
      days += allDay;
    }
  }
  return days;
}


function datedifference(sDate1, sDate2) { //sDate1和sDate2是2006-12-18格式  
  var dateSpan, tempDate, iDays;
  sDate1 = Date.parse(sDate1);
  sDate2 = Date.parse(sDate2);
  dateSpan = sDate2 - sDate1;
  dateSpan = Math.abs(dateSpan);
  iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
  return iDays
};

function addDate(date, days) {
  var d = new Date(date);
  d.setDate(d.getDate() + days);
  var m = d.getMonth() + 1;
  return d.getFullYear() + '-' + m + '-' + d.getDate();
}


export function getHoliday(sdate, edate) {
  var num = datedifference(sdate, edate);
  var lastday = num % 7;
  var weeknum = 0;
  if (num >= 7) {
    weeknum = parseInt(num / 7);
  }
  var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  var result = 0;
  for (var i = 0; i < lastday; i++) {
    var dd = new Date(addDate(sdate, i)).getDay();
    if (weekday[dd] != "星期六" && weekday[dd] != "星期日") {
      result++;
    }
  }
  return result + weeknum * 5;
}

