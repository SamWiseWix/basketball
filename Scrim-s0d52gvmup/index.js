
let score1el = document.getElementById("score1-el")
let score2el = document.getElementById("score2-el")
let score1 = 0
let score2 = 0
function button1(){
    score1 += 1
    console.log(score1)
    score1el.textContent = score1
}
function button2(){
    score1 += 2
    console.log(score1)
    score1el.textContent = score1
}
function button3(){
    score1 += 3
    console.log(score1)
    score1el.textContent = score1
}
function button11(){
    score2 += 1
    console.log(score2)
    score2el.textContent = score2
}
function button21(){
    score2 += 2
    console.log(score2)
    score2el.textContent = score2
}
function button31(){
    score2 += 3
    console.log(score2)
    score2el.textContent = score2
}
function reset(){
    score1 = score1-score1
    score2 = score2-score2
    score2el.textContent = score2
    score1el.textContent = score1
    console.log("reset")
}