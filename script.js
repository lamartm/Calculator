//Ik maak hier voor elke button die ik iets wil geven een variabel

const clearOperator = document.getElementById('C')
const clearAllOperator = document.getElementById('CE')

const calcNumButtons = document.getElementsByClassName('number')
const calcOperatorButtons = document.getElementsByClassName('operator')

const displayValElement = document.getElementById('result')

// Hier open ik een twee variabelen. Displayval is wat je uiteindelijk op de display ziet van de rekenmachine
// evalStringArray is een open array waarin ik de berekening bewaar en die dan bereken met functie eval()

let displayVal = '0'
let evalStringArray = []

// updateDisplayVal is een functie die de scherm update met een nieuwe nummer die ingevoerd wordt door de gebruiker

let updateDisplayVal = function (clickObj) {
    let btnText = clickObj.target.innerText;

    // hier haal ik de '0' weg van displayVal want anders krijg je '03' i.p.v '3'

    if (displayVal === '0')
        displayVal = ''

    displayVal += btnText;
    displayValElement.innerText = displayVal
}

// preformOperation is een functie die de berekening (+,-,/) zal toevoegen aan evalStringArray en het uiteindelijk zal berekenen,
// als '=' geselecteerd wordt.

let preformOperation = function (clickObj) {
    let operator = clickObj.target.innerText
    if (operator == '=') {
        evalStringArray.push(displayVal)
        let evaluation = eval(evalStringArray.join(' '))
        displayVal = evaluation + ''
        displayValElement.innerText = displayVal
        evalStringArray = []
    } else {
        evalStringArray.push(displayVal)
        displayVal = '0'
        displayValElement.innerText = displayVal
        evalStringArray.push(operator)
    }
}

//Hier voeg ik bij elke item uit calcNumButtons (dus alle nummers) een eventlistener 'click' dit betekent dat als er op een van
//de nummers wordt geklikt, de functie updateDisplayVal runt

for (let i = 0; i < calcNumButtons.length; i++) {
    calcNumButtons[i].addEventListener('click', updateDisplayVal, false)
}

//Hetzelfde gebeurt hier weer

for (let i = 0; i < calcOperatorButtons.length; i++) {
    calcOperatorButtons[i].addEventListener('click', preformOperation, false)
}

// Hier is een functie die geactiveerd wordt wanneer de gebruiker op de CE oftewel clear all
// knop klikt. Deze functie zet alles weer terug hoe het eerst was zodat de gebruiker opnieuw kan beginnen

clearAllOperator.onclick = function () {
    displayVal = '0'
    pendingVal = undefined
    evalStringArray = []
    displayValElement.innerHTML = displayVal
}

// Deze functie haalt een getal weg.

clearOperator.onclick = function () {
    let lengthOfDisplayVal = displayVal.length
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1)
    if (displayVal === '')
        displayVal = '0'
    displayValElement.innerText = displayVal
}


