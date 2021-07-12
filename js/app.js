//get the values from the page
//controller function
function getValues() {
  let startValue = document.getElementById("startValue").value
  let endValue = document.getElementById("endValue").value
  let numbers = []

  // attempt to parse into integers
  startValue = parseInt(startValue)
  endValue = parseInt(endValue)

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    let numbers = generateNumbers(startValue, endValue)
    displayNumbers(numbers)
  } else {
    alert("You must enter integers")
  }
}

//generate numbers from start value to the end value
//logic function
function generateNumbers(sValue, eValue) {
  let numbers = []

  for (let i = sValue; i <= eValue; i++) {
    numbers.push(i)
  }

  return numbers
}

//display the numbers and mark the even numbers bold
//view function
function displayNumbers(numbers) {
  let templateRows = ""

  for (let i = 0; i < numbers.length; i++) {
    let className = "even"
    let number = numbers[i]

    if (number % 2 == 0) {
      className = "even"
    } else {
      className = "odd"
    }
    templateRows += `<tr><td class="${className}">${number}</td></tr>`
  }
  document.getElementById("results").innerHTML = templateRows
}