var today = new Date();
document.write(today + "<br>");


var date = (today.getDate()) + '-' + (today.getMonth() + 1) + '-' + (today.getFullYear());
document.write(date + "<br>");


var time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
document.write(time + "<br>");
