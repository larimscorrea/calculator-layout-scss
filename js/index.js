const $buttonsNumbers = document.querySelectorAll(".calculator__buttons--number")
const $buttonsOperators = document.querySelectorAll('.calculator__buttons--operator')
const $inputGetNumbers = document.querySelector('.calculator__display-input')
const $result = document.querySelector('.calculator__display-result')
const $buttonResult = document.querySelector('.calculator__buttons--result')

const $buttonsRemove = document.querySelector('.calculator__buttons--remove')

let calculate = ""

$buttonsNumbers.forEach(function($button){
        $button.addEventListener('click', function(){
            calculate = calculate + $button.textContent
            $inputGetNumbers.value = calculate.replaceAll(" ", "")
    })
})

$buttonsOperators.forEach(function($button){
    $button.addEventListener('click', function(){
        calculate = calculate + $button.textContent
        $inputGetNumbers.value = calculate.replaceAll(" ", "")
})
})

$buttonResult.addEventListener('click', function(){
    $result.textContent = eval(calculate);
})


$buttonsRemove.removeEventListener('click', function(){
    $button.removeEventListener = location.reload(){

    }
    
})