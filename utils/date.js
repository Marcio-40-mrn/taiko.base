function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
 function startTime() {
    var today = new Date();
    var y = today.getFullYear();
    var month = today.getMonth();
    month = month+1;
    var d = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    month = checkTime(month);
    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var time  = y +""+ month +""+d+"_"+ h + "" + m + "" + s;
    return time;
  }

  module.exports = startTime;