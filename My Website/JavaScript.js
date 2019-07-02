var currentDate = new Date(),
    day = currentDate.getDate();
    month = currentDate.getMonth();
    year = currentDate.getFullYear();

var today = new Array();
for (var i=1; i <= 32; ++i){
    today[i] = new Image();
    today[i].src = "Numbers 0 - 31/"+ i +".png";
}

var yesterday = day - 1;
var tomorrow = day + 1;

if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
    if (tomorrow > 29 && month == 2)  {
        tomorrow = 1;
    }
    if (yesterday == 0 &&   month == 2) {
        yesterday = 29;
    }
}
else {
    if (tomorrow > 28 && month == 2)  {
        tomorrow = 1;
    }
    if (yesterday == 0 &&   month == 2) {
        yesterday = 28;
    }
}

if (yesterday == 0) {
    if (month == 1 || month == 3 || month == 5 || month == 7 
    || month == 8 || month == 10 || month ==12) {
        yesterday = 31;
    }
    else {
        yesterday = 30;
    }
}

if (tomorrow > 30){
    if (month == 4 || month == 6 || month == 8 ){
    tomorrow = 1;
    }
}
else if (tomorrow > 31){
    tomorrow = 1;
}



var x = document.getElementById("today");
x.appendChild(today[day]);

var x = document.getElementById("tomorrow");
x.appendChild(today[tomorrow]);

var x = document.getElementById("yesterday");
x.appendChild(today[yesterday]);


var weekday = new Array(7);
    weekday[0] = new Image();
    weekday[0].src = "Weekdays/Sunday.png";
    weekday[1] = new Image();
    weekday[1].src = "Weekdays/Monday.png";
    weekday[2] = new Image();
    weekday[2].src = "Weekdays/Tuesday.png";
    weekday[3] = new Image();
    weekday[3].src = "Weekdays/Wednesday.png";
    weekday[4] = new Image();
    weekday[4].src = "Weekdays/Thursday.png";
    weekday[5] = new Image();
    weekday[5].src = "Weekdays/Friday.png";
    weekday[6] = new Image();
    weekday[6].src = "Weekdays/Saturday.png";

var weekdays = currentDate.getDay();

var y = weekdays-1;
var d = weekdays;
var t = weekdays+1;

if (y < 0){
    y == 6;
}

if (t > 6){
    t == 0;
}


var w = document.getElementById("week0");
w.appendChild(weekday[y]);
var w = document.getElementById("week1");
w.appendChild(weekday[d]);
var w = document.getElementById("week2");
w.appendChild(weekday[t]);


