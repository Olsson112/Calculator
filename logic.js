let firstNrSegment = []
let secondNrSegment = []
let method

function inputNr() {
    let nr = document.getElementById("nrInput").value 
    if(!method) {
        firstNrSegment.push(Number(nr)) 
    } else {
        secondNrSegment.push(Number(nr))
    }
}

function inputMethod() {
    method = document.getElementById("methodInput").value
}

function calculate() {
    let numberOne = 0
    let numberTwo = 0

    firstNrSegment.forEach((nr) => numberOne += nr)
    secondNrSegment.forEach((nr) => numberTwo += nr)

    console.log(numberOne, numberTwo)

    let resultContainer = document.getElementById("result")

    if(method == "+") {
        resultContainer.innerText = numberOne + numberTwo
    } else if (method == "-") {
        resultContainer.innerText = numberOne - numberTwo
    } else if (method == "*") {
        resultContainer.innerText = numberOne * numberTwo
    } else {
        resultContainer.innerText = numberOne / numberTwo
    }
}