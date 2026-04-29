let first_number = document.getElementById("firstNumber");
let second_number = document.getElementById("secondNumber");
let game_result = document.getElementById("gameResult");
let user_input = document.getElementById("userInput");
let success_message = "Congratulation! You got it right.";
let failure_message = "Please Try Again!";

let first_random_value = Math.ceil(Math.random()*100);
//Math.random() gives a random decimal ≥ 0 and < 1
//Math.ceil() will rounds UP to nearest integer.
//* 100 → scales it to 0 to < 100
let second_random_value = Math.ceil(Math.random()*100);
first_number.textContent = first_random_value;
second_number.textContent = second_random_value;
    
function onRestart(){
    game_result.textContent = "";
    game_result.style.backgroundColor = "";
    let first_random_value = Math.ceil(Math.random()*100);
    let second_random_value = Math.ceil(Math.random()*100);
    first_number.textContent = first_random_value;
    second_number.textContent = second_random_value;
    user_input.value = "";
}

function onCheck(){
    let add = parseInt(first_number.textContent) + parseInt(second_number.textContent);
    console.log(add);
    if(parseInt(user_input.value) === add){
        game_result.textContent = success_message;
        game_result.style.backgroundColor = "#028a0f";
    }
    else{
        game_result.textContent = failure_message;
        game_result.style.backgroundColor = "#1e217c";
    }
}