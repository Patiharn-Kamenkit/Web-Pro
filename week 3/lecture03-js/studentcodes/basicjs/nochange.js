// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here

// Compute the cost

  //document.getElementById("cost").value = 100
  var sumFrench = document.getElementById("french").value
  var sumHazlenut = document.getElementById("hazlenut").value
  var sumColumbian = document.getElementById("columbian").value
  document.getElementById("cost").value = (sumFrench * 3.49) + (sumHazlenut * 3.95) + (sumColumbian * 4.59)
  if (sumFrench < 0 || sumHazlenut < 0 || sumColumbian < 0){
    alert("Invalid input")
    document.getElementById("cost").value = null;
  }

}  //* end of computeCost
