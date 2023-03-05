
const startbtn = document.querySelector(".start_btn button");
const infoboxvar = document.querySelector(".info_box");
const exitbtn_var = infoboxvar.querySelector(".buttons .quit");
const continuebtn_var = infoboxvar.querySelector(".buttons .restart");
const quizbox_var = document.querySelector(".quiz_box");
const resultbox_var = document.querySelector(".result_box");
const optionlist_var = document.querySelector(".option_list");
const timeline_var = document.querySelector("header .time_line");
const timeText_var = document.querySelector(".timer .time_left_txt");
const timeCount_var = document.querySelector(".timer .timer_sec");


startbtn.onclick = ()=>{
    infoboxvar.classList.add("activeInfo");
}


exitbtn_var.onclick = ()=>{
    infoboxvar.classList.remove("activeInfo");
}


continuebtn_var.onclick = ()=>{
    infoboxvar.classList.remove("activeInfo");
    quizbox_var.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let timeValue_var =  15;
let quecount_var = 0;
let quenumb_var = 1;
let userScore_var = 0;
let counter;
let counterline_var;
let width_Value_var = 0;

const restart_quiz = resultbox_var.querySelector(".buttons .restart");
const quit_quiz = resultbox_var.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quizbox_var.classList.add("activeQuiz");
    resultbox_var.classList.remove("activeResult");
    timeValue_var = 15;
    quecount_var = 0;
    quenumb_var = 1;
    userScore_var = 0;
    width_Value_var = 0;
    showQuetions(quecount_var);
    queCounter(quenumb_var);
    clearInterval(counter);
    clearInterval(counterline_var);
    startTimer(timeValue_var);
    startTimerLine(width_Value_var);
    timeText_var.textContent = "Time Left";
    next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{
    if(quecount_var < questions.length - 1){
        quecount_var++;
        quenumb_var++;
        showQuetions(quecount_var);
        queCounter(quenumb_var);
        clearInterval(counter);
        clearInterval(counterline_var);
        startTimer(timeValue_var);
        startTimerLine(width_Value_var);
        timeText_var.textContent = "Time Left";
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterline_var);
        showResult();
    }
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");


    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    optionlist_var.innerHTML = option_tag;

    const option = optionlist_var.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterline_var);
    let userAns = answer.textContent;
    let correcAns = questions[quecount_var].answer;
    const allOptions = optionlist_var.children.length;

    if(userAns == correcAns){
        userScore_var += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore_var);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(optionlist_var.children[i].textContent == correcAns){
                optionlist_var.children[i].setAttribute("class", "option correct");
                optionlist_var.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        optionlist_var.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResult(){
    infoboxvar.classList.remove("activeInfo");
    quizbox_var.classList.remove("activeQuiz");
    resultbox_var.classList.add("activeResult");
    const scoreText = resultbox_var.querySelector(".score_text");
    if (userScore_var > 3){

        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore_var +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore_var > 1){
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore_var +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore_var +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount_var.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount_var.textContent;
            timeCount_var.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText_var.textContent = "Time Off";
            const allOptions = optionlist_var.children.length;
            let correcAns = questions[quecount_var].answer;
            for(i=0; i < allOptions; i++){
                if(optionlist_var.children[i].textContent == correcAns){
                    optionlist_var.children[i].setAttribute("class", "option correct");
                    optionlist_var.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                optionlist_var.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show");
        }
    }
}

function startTimerLine(time){
    counterline_var = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeline_var.style.width = time + "px";
        if(time > 549){
            clearInterval(counterline_var);
        }
    }
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
