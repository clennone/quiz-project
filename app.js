import { getCountry } from "./JS/getCountry.js";

// user variables
const userBox = document.querySelector('#user');
const userName = document.querySelector('#user-name');
const userAge = document.querySelector('#user-age');
const btnUser = document.querySelector('#btn-user');

//quiz variables
const quizBox = document.querySelector('#quiz')
const question = document.querySelector('#question');
const answers = document.querySelectorAll('.answer-input');
const textA = document.querySelector('.text_a');
const textB = document.querySelector('.text_b');
const textC = document.querySelector('.text_c');
const textD = document.querySelector('.text_d');
const btnQuiz = document.querySelector('#btn-quiz');

//lenguage variables
const boxLng = document.querySelector('#language');
const btnSp = document.querySelector('#btn-sp');
const btnEn = document.querySelector('#btn-en');

let quiz = await fetch('./JSON/spQuiz.json');
let data = await quiz.json();
const spQuiz = data.Quiz;

quiz = await fetch('./JSON/enQuiz.json');
data = await quiz.json();
const enQuiz = data.Quiz;

let currentQuiz = 0;

console.log(spQuiz)
console.log(enQuiz)

//User creator
const player = {
    name : '',
    age : '',
    points : 0
};

eventListeners();

function eventListeners() {
    //when app start
    document.addEventListener('DOMContentLoaded', startApp);
    
    //validate fields are full
    userName.addEventListener('blur', validateFields);
    userAge.addEventListener('blur', validateFields);

    //INITIAL BTN EVENTS
    btnUser.addEventListener('click', getPlayer);

    //validate lenguage
    btnSp.addEventListener('click',() =>{
        loadQuiz(spQuiz)
    } );
    btnEn.addEventListener('click',()=>{
        loadQuiz(enQuiz)
    });


    btnQuiz.addEventListener('click',validateAnswer);
};

//Functions for USER BOX
function startApp(){
    userName.value = '';
    userAge.value = '';
    btnUser.disabled = true;
    btnUser.classList.add('cursor-disabled','opacity')
};

//Validate fields
function validateFields(e) {

    //Validate if fields are complete
    if(e.target.value.length > 0){
        e.target.classList.remove('border-red');
    } else {
        e.target.classList.add('border-red');
        showError();
        btnUser.disabled = true;
        btnUser.classList.add('cursor-disabled','opacity')
    };

    // validate element created to remove
    const err = document.querySelector('p.error-msg');

    //remove error message and disable btn if everything is ok
    if(userName.value != '' && userAge.value != ''){
        btnUser.disabled = false;
        btnUser.classList.remove('cursor-disabled','opacity');
        if(err){
            err.remove();
        }
    };
};

function showError(){
    //Create element for message error
    const msgError = document.createElement('p');
    msgError.innerText = 'Fields are required';
    msgError.classList.add('error-msg','errors');

    // get if ERRORS is already in the DOM and validate
    const errors = document.querySelectorAll('.errors');
    if(errors.length === 0){
        userBox.appendChild(msgError);
    }
};

function getPlayer() {
    player.name = userName.value;
    player.age = userAge.value;
    console.log(player)
    userBox.classList.add('hide');
    boxLng.classList.remove('hide');
};

//-------------------------//
//Functions for quiz

//load quiz
function loadQuiz(data) {

    //hide user box and show quiz bos
    if(quizBox.classList = 'hide'){
        boxLng.classList.add('hide');
        quizBox.classList.remove('hide');
    }

    // remove checked bottons
    answers.forEach(el => el.checked = false);

    // fill the quiz
    let quiz = data[currentQuiz];
    question.innerText = quiz.question;
    textA.innerText = quiz.a;
    textB.innerText = quiz.b;
    textC.innerText = quiz.c;
    textD.innerText = quiz.d;
}

//check answer
function checked() {
    let checkedAnswer = '';
    answers.forEach(el=>{
        if(el.checked){
            checkedAnswer = el.id;
        }
    })
    return checkedAnswer;
}


//validate answer and start next quiz
function validateAnswer() {
    let answer = checked();


    if(answer){
        if(answer == dataQuiz[currentQuiz].correct){
            newUser.points += 10;
        } else {
            console.log('incorrect answer')
        }
    } 
    currentQuiz++;
    if(currentQuiz < dataQuiz.length){
        loadQuiz();
    }else{
        quizBox.classList.add('hide');
    }
    
}

