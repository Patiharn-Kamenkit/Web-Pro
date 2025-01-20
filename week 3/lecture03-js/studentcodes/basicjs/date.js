// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation
    
// Get the current date

      var today = new Date();

// Fetch the various parts of the date

      var dateString = today.getDate();
      var day = today.getDay();
      var month = today.getMonth();
      var year = today.getFullYear();
      var hour = today.getHours();
      var minute = today.getMinutes();
      var second = today.getSeconds();
      var time = today.toLocaleTimeString();
      var time2 = today.getTime();
      var ampm = "";
	  //Write your own code here 

      const dayarray = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thusday",
            "Friday",
            "Saturday"
      ]
      const montharray = [
            "January",
            "Febrary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
      ]
// Display the parts

      // document.write(
      //   "Date: " + dateString + "<br />",
      //   "Day: " + day + "<br />");
	//Write your own code here 
      // if(day == 1) {day = "Monday"}
      // if(month == 0) {month = "January"}
       if(hour >= 12){ ampm = "pm";}
       if(minute < 10){ minute = "0" + minute}
      document.write(dayarray[day] + " " + dateString + " " + montharray[month] + " " + year + ", ")
      document.write(time)
