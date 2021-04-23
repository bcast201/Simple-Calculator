//Selectors
const firstNumber = document.querySelector('.first-number')
const secondNumber = document.querySelector('.second-number')



const additionButton = document.querySelector('.addition-button')
const subtractionButton = document.querySelector('.subtraction-button')
const multiplicationButton = document.querySelector('.multiplication-button')
const divisionButton = document.querySelector('.division-button')

//Event Listeners

additionButton.addEventListener('click', addFunc);
subtractionButton.addEventListener('click', subFunc);
multiplicationButton.addEventListener('click', multFunc);
divisionButton.addEventListener('click', divFunc)



//Functions

function addFunc(){
    const firstNo = firstNumber.value;
    const secondNo = secondNumber.value;
    const answer = parseInt(firstNo) + parseInt(secondNo)
        if (isNaN(answer)){
            document.querySelector('.output').innerText= 'Please enter two valid numbers'
        } else {
        document.querySelector('.output').innerHTML= `= ${answer}`
    }
}
function subFunc(){
    const firstNo = firstNumber.value;
    const secondNo = secondNumber.value;
    const answer = parseInt(firstNo) - parseInt(secondNo)
        if (isNaN(answer)){
            document.querySelector('.output').innerText= 'Please enter two valid numbers'
        } else {
        document.querySelector('.output').innerHTML= `= ${answer}`
    }
}
function multFunc(){
    const firstNo = firstNumber.value;
    const secondNo = secondNumber.value;
    const answer = parseInt(firstNo) * parseInt(secondNo)
        if (isNaN(answer)){
            document.querySelector('.output').innerText= 'Please enter two valid numbers'
        } else {
        document.querySelector('.output').innerHTML= `= ${answer}`
    }
}
function divFunc(){
    const firstNo = firstNumber.value;
    const secondNo = secondNumber.value;
    const answer = parseInt(firstNo) / parseInt(secondNo)
        if (isNaN(answer)){
            document.querySelector('.output').innerText= 'Please enter two valid numbers'
        } else {
        document.querySelector('.output').innerHTML= `= ${answer}`
    }
}








// const calcButton = document.querySelectorAll('button').forEach(item => {
//     item.addEventListener('click', calcFunction)
// })


// //This should work but it doesn't and I don't know why
// function calcFunction(event){
//     const target = event.target
//     console.log(target)
//     const firstNo = firstNumber.value;
//     const secondNo = secondNumber.value;

//     if (target.className[0] = 'addition-button'){
//         const answer = parseInt(firstNo) + parseInt(secondNo)
//         console.log(answer)
//     } else if (target.className[0] = 'subtraction-button'){
//         const answer = parseInt(firstNo) - parseInt(secondNo);
//         console.log(answer)
//     } else if (target.className[0] = 'multiplication-button'){
//         const answer = parseInt(firstNo) * parseInt(secondNo);
//         console.log(answer)
//     } else if (target.className[0] = 'division-button'){
//         const answer = parseInt(firstNo) / parseInt(secondNo);
//         console.log(answer)
//     }
// }