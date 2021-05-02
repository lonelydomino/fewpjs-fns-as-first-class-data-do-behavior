/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  string = string.split(":");
  let hour = parseInt(string[0])
  // let minute = parseInt(string[1])
  if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  }
  else if (hour > 17) {
    return "Good Evening"

  }
  else {
    return "Good Morning"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let node = document.querySelector("#greeting")
  node.innerText = message
}
