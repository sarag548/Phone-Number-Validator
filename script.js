const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById('clear-btn');
const result = document.getElementById("results-div");
const regex = 
/^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
const isValid = (msg) => regex.test(msg);

function checkNumber(){

  result.innerText = isValid(userInput.value) ? "Valid US number:" + " " + userInput.value : "Invalid US number:" + " " + userInput.value;
}

function checkInput(){
  if(userInput.value === ""){
    alert("Please provide a phone number");
  }
  else{
    checkNumber();
  }
}

function resetInput(){
  result.innerText = "";
}

checkButton.addEventListener("click", checkInput);
clearButton.addEventListener("click", resetInput);
