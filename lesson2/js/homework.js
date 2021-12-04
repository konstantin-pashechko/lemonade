'use strict'


// максимальное к-во мест в зале 50
// каждое 3е место недоступно из-за ковида =(
// ввести номер места (через prompt) и записать в переменные firstPlace(введенное место) и в secondPlace следующее ближайшее местов интервале от 20 до 30
// если места выходят за рамки интервала / вывести алерт с предупреждением
// если место зарезервировано(тоесть каждое третее) выводим алерт с текстом 'место забронированно'
// решить задание 2-мя способами: if, switch...case
//
// let firstPlace = 24
// let secondPlace
//
// if(firstPlace>=20&&firstPlace<29&&firstPlace%3!==0){
//     if(!(firstPlace+1)%3){
//         secondPlace=firstPlace+1
//     }else{
//         secondPlace=firstPlace+2
//     }
// }else{
//
// }

if(firstPlace>=20&&firstPlace<29&&firstPlace%3!==0){
    secondPlace=!(firstPlace+1)%3?firstPlace+2:firstPlace+1
}else{

}

// switch (!!firstPlace) {
//     case firstPlace < 20:
//     case firstPlace > 29:
//         console.log('bad value')
//         break
//     case !(firstPlace % 3):
//         console.log('%3')
//         break
//     default:
//         secondPlace = !(firstPlace + 1) % 3 ? firstPlace + 1 : firstPlace + 2
// }


// let secondPlace
// getPrompt()


// function getPrompt(){
//     let firstPlace=+prompt('input place')
//     checkRange(firstPlace)
// }


// function checkRange(firstPlace){
//     if(firstPlace>=20&&firstPlace<29&&firstPlace%3!==0){
//         secondPlace=(firstPlace+1)%3===0?firstPlace+2:firstPlace+1
//         alert(secondPlace)
//     }else{
//         getPrompt()
//     }
// }

















