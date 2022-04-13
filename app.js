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

const qPoints = document.querySelector('.question-points');
const qCounter = document.querySelector('.question-counter');

let currentQuiz = 0;
let counter = 1;

//User creator
const player = {
    name : String,
    age : String,
    points : Number
}

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
    btnSp.addEventListener('click',activeSp); 
    btnSp.addEventListener('click', () => {
        Swal.fire({
            title: 'Prepara el cerebro',
            timer: 4000,
            showConfirmButton: false,
        })
        setTimeout( ()=> { loadQuizSp() },4000 ) 
    }); 

    btnEn.addEventListener('click', activeEn);   
    btnEn.addEventListener('click', () => {
        Swal.fire({
            title: 'Prepare your brain',
            timer: 4000,
            showConfirmButton: false,
        })
        setTimeout( ()=> { loadQuizEn() },4000 ) 
    }); 


    btnQuiz.addEventListener('click',validateAnswer);
};



//Functions for USER BOX
function startApp(){
    userName.value = '';
    userAge.value = '';
    btnUser.disabled = true;
    btnUser.classList.add('cursor-disabled','opacity');
    // Swal.fire({
    //     title: 'Hi!',
    //     text: 'Challenge your mind in this quiz',
    //     timer: 5000,
    //     showConfirmButton: false,
    // })
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
    if(userName.value !== '' && userAge.value !== ''){
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
    player.points = 0;
    console.log(player)
    userBox.classList.add('hide');
    boxLng.classList.remove('hide');
};

//-------------------------//
//Functions for quiz

//load quiz
function loadQuizSp() {
    // remove checked bottons
    answers.forEach(el => el.checked = false);
    // fill the quiz
    let quiz = dataSp[currentQuiz];
    question.innerText = quiz.question;
    textA.innerText = quiz.a;
    textB.innerText = quiz.b;
    textC.innerText = quiz.c;
    textD.innerText = quiz.d;
};

function loadQuizEn() {
    // remove checked bottons
    answers.forEach(el => el.checked = false);
     // fill the quiz
    let quiz = dataEn[currentQuiz];
    question.innerText = quiz.question;
    textA.innerText = quiz.a;
    textB.innerText = quiz.b;
    textC.innerText = quiz.c;
    textD.innerText = quiz.d;
};

//check answer
function checked() {
    let checkedAnswer = '';
    answers.forEach(el=>{
        if(el.checked){
            checkedAnswer = el.id;
        }
    })
    return checkedAnswer;
};


//validate answer and start next quiz
function validateAnswer() {
    let answer = checked();

    if(answer){
        if(btnSp.classList.contains('active')){
            if(answer == dataSp[currentQuiz].correct){
                player.points += 10;
                Swal.fire({
                    title: 'Correcto!',
                    timer: 1000,
                    icon: 'success',
                    showConfirmButton: false,
                    
                })
            } else {
                Swal.fire({
                    title: 'Incorrecto!',
                    timer: 1000,
                    icon: 'error',
                    showConfirmButton: false,
                })
            }
            counter++;
            currentQuiz++;
            
            if(currentQuiz < dataSpLenght){
                setTimeout( ()=> { 
                    qCounter.textContent = `Pregunta ${counter} de ${dataSpLenght}`
                    qPoints.textContent = `Puntos: ${player.points}`;
                    loadQuizSp() 
                },1200 )  
            } else{
                quizBox.classList.add('hide')
                console.log(player)
            }

        } else {
            if(answer == dataEn[currentQuiz].correct){
                player.points += 10;
                Swal.fire({
                    title: 'Correct!',
                    timer: 1000,
                    icon: 'success',
                    showConfirmButton: false,
                    
                })
            } else {
                Swal.fire({
                    title: 'Incorrect!',
                    timer: 1000,
                    icon: 'error',
                    showConfirmButton: false,
                })
            }

            counter++;
            currentQuiz++;
            
            if(currentQuiz < dataEnLenght){
                setTimeout( ()=> { 
                    qPoints.textContent = `Points: ${player.points}`;
                    qCounter.textContent = `Question ${counter} of ${dataSpLenght}`
                    loadQuizEn() 
                },1200 )  
            } else{
                quizBox.classList.add('hide')
                console.log(player)
            }
        }
        

    } else {
        Swal.fire({
            title: 'Select an answer!',
            icon: 'error',
        })
    }


    
}

function activeSp() {
    btnSp.classList.add('active');
    boxLng.classList.add('hide');
    setTimeout( () => { quizBox.classList.remove('hide') },4000);
    qPoints.textContent = `Puntos: ${player.points}`;
    qCounter.textContent = `Pregunta ${counter} de ${dataSpLenght}`
};

function activeEn() {
    boxLng.classList.add('hide');
    setTimeout( () => { quizBox.classList.remove('hide') },4000);
    qPoints.textContent = `Points: ${player.points}`;
    qCounter.textContent = `Question ${counter} of ${dataSpLenght}`
};

async function getQuizSp() {
    const quiz = await fetch('./JSON/spQuiz.json')
        .then(res=> res.json())
        .catch(err => console.log(err))

        return quiz.Quiz
}

async function getQuizEn() {
    const quiz = await fetch('./JSON/enQuiz.json')
        .then(res=> res.json())
        .catch(err => console.log(err))

        return quiz.Quiz
}


const dataSp = await getQuizSp();
const dataEn = await getQuizEn();
const dataSpLenght = dataSp.length
const dataEnLenght = dataEn.length