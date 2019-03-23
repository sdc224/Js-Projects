var today = new Date();
var day = today.getDay();
var daylist = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
console.log("Today is : " + daylist[day] + ".");
function formatDateToString(date, seperator = "-"){
    // 01, 02, 03, ... 29, 30, 31
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var yyyy = date.getFullYear();
 
    // create the format you want
    return (dd + seperator + MM + seperator + yyyy);
}
console.log(formatDateToString(today, "/"));
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ') 
{ 
    if (minute===0 && second===0)
    { 
        hour=12;
        prepand=' Noon';
    } 
    else
    { 
        hour=12;
        prepand=' PM';
    } 
} 
if (hour===0 && prepand===' AM ') 
{ 
    if (minute===0 && second===0)
    { 
        hour=12;
        prepand=' Midnight';
    } 
    else
    { 
        hour=12;
        prepand=' AM';
    } 
} 
console.log("Current Time : "+hour + " : " + minute + " : " + second + prepand);