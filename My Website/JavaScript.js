var currentDate = new Date(),
    month = currentDate.getMonth() + 1,
    year = currentDate.getFullYear();
document.getElementById("date").innerHTML = "" + year + " " + month;

