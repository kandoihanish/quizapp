const play_quiz = document.querySelector(".playquiz");
const quiz_box = document.querySelector(".quizbox");
const ques_text = document.querySelector(".questext");
const optionbox = quiz_box.querySelector(".options");
const quizfooter_right = document.querySelector(".quizfooterright");
const ques_counter = document.querySelector(".quescounter");
const total_que = document.querySelector(".quizfooter .totalques");
const ques_counter2 = document.querySelector(" .quizfooter .quescounter");
const result_box = document.querySelector(".resultbox");
const total_que1 = document.querySelector(".result .totalque");
const right_answer = document.querySelector(".result .rightanswer");
const wrong_answer = document.querySelector(".result .wronganswer");
const marks = document.querySelector(".result .marksresult");
const re_play = document.querySelector(".resultfooter .replay");
const exi_t = document.querySelector(".resultfooter .exit");
const check = `<i class="fa fa-check"></i>`
const wrong = `<i class="fa fa-times"></i>`


play_quiz.onclick = () => {
    quiz_box.classList.remove("inactive");
    play_quiz.classList.add("inactive");
}


var correcta = 0;
var wronga = 0;
total_que.innerText = questions.length;
total_que1.innerText = questions.length;
var ques_ind = 0;
ques_counter2.innerText = ques_ind + 1;

questionshow(ques_ind);

function questionshow(ques_ind) {
    ques_text.innerHTML = questions[ques_ind].num + ". " + questions[ques_ind].question;
    var opstatement = "";
    for (var i = 0; i < questions[ques_ind].options.length; i++) {
        opstatement += `<div class="option "> ${questions[ques_ind].options[i]} </div>`;
    }
    optionbox.innerHTML = opstatement;
    var all_options = document.querySelectorAll(".option");

    for (var j = 0; j < all_options.length; j++) {
        all_options[j].setAttribute("onclick", "userans(this)");
    }
    quizfooter_right.classList.add("inactive");
}


function userans(answer) {

    let userans = answer.innerText;
    let correctans = questions[ques_ind].answer;
    let all_options2 = optionbox.querySelectorAll(".option");
    quizfooter_right.classList.remove("inactive");
    if (userans == correctans) {
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", check);
        correcta++;

    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", wrong);
        wronga++;
        for (var i = 0; i < all_options2.length; i++) {
            if (all_options2[i].innerText == correctans) {
                all_options2[i].classList.add("correct");
                all_options2[i].insertAdjacentHTML("beforeend", check);

            }
        }
    }
    for (var j = 0; j < all_options2.length; j++) {
        all_options2[j].classList.add("disabled");

    }
}


quizfooter_right.onclick = () => {
    ques_ind++;
    if (questions.length > ques_ind) {
        questionshow(ques_ind);
        ques_counter2.innerText = ques_ind + 1;
    } else {
        
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        right_answer.innerText = correcta;
        wrong_answer.innerText = wronga;
        marks.innerText = ((correcta * 100) / questions.length).toFixed(2) + "%";
    }
    if (ques_ind == questions.length - 1) {
        quizfooter_right.innerText = "Finish";
    }
}


exi_t.onclick = () => {
    play_quiz.classList.remove("inactive");
    result_box.classList.add("inactive");
    correcta = 0;
    wronga = 0;
    ques_ind = 0;
    questionshow(ques_ind);
    ques_counter2.innerText = ques_ind + 1;
    quizfooter_right.innerText = "Next";
}
re_play.onclick = () => {
    quiz_box.classList.remove("inactive");
    result_box.classList.add("inactive");
    correcta = 0;
    wronga = 0;
    ques_ind = 0;
    questionshow(ques_ind);
    ques_counter2.innerText = ques_ind + 1;
    quizfooter_right.innerText = "Next";

}