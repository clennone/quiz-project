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

let currentQuiz = 0;

//User creator
function User(name,age){
    this.name = name;
    this.age = age;
    this.points = 0;
};

let newUser = new User()

//questions for quiz
const dataQuiz = [
    {
        question: 'What was the age when Harry knews that he was a magician?',
        a: '8',
        b: '10',
        c: '6',
        d: '11',
        correct: 'a'
    },
    {
        question: 'What is the first spell that was cast by Hermione?',
        a: 'Avada Kedavra',
        b: 'Wingardium Leviosa',
        c: 'Oculus Reparo',
        d: 'Sectusempra',
        correct: 'a'
    },
]

eventListeners();

function eventListeners() {
    //when app start
    document.addEventListener('DOMContentLoaded', startApp);

    //validate fields are full
    userName.addEventListener('blur', validateFields);
    userAge.addEventListener('blur', validateFields);

    
    btnUser.addEventListener('click', loadQuiz);
    btnQuiz.addEventListener('click',validateAnswer);
};

//Functions for USER BOX
function startApp(){
    userName.value = '';
    userAge.value = '';
    btnUser.disabled = true;
    btnUser.classList.add('cursor-disabled','opacity')
};
//show error in a p element
function showError(){
    const msgError = document.createElement('p');
    msgError.innerText = 'Fields needs to complete';
    msgError.classList.add('error-msg','errors');
    
    const errors = document.querySelectorAll('.errors')
    
    if(errors.length === 0){
        userBox.appendChild(msgError)
    }
    
};
//Validate fields
function validateFields(e) {

    if(e.target.value.length > 0){
        e.target.classList.remove('border-red');
    } else {
        e.target.classList.add('border-red');
        showError();
        btnUser.disabled = true;
        btnUser.classList.add('cursor-disabled','opacity')
    }

    const err = document.querySelector('p.error-msg');
    if(userName.value != '' && userAge.value != ''){
        btnUser.disabled = false;
        btnUser.classList.remove('cursor-disabled','opacity');
        newUser.name = userName.value;
        newUser.age = userAge.value;
        if(err){
            err.remove();
        }
    }
 
};

//-------------------------//
//Functions for quiz

//load quiz
function loadQuiz() {


    
    // hide user box and show quiz bos
    if(quizBox.classList = 'hide'){
        userBox.classList.add('hide');
        quizBox.classList.remove('hide');
    }

    // remove checked bottons
    answers.forEach(el => el.checked = false);

    // fill the quiz
    let quiz = dataQuiz[currentQuiz];
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

console.log(dataQuiz.length)
//validate answer and start next quiz
function validateAnswer() {
    let answer = checked();


    if(answer){
        
        if(answer == dataQuiz[currentQuiz].correct){
            newUser.points += 10;
            console.log(newUser.points)
            console.log('correct')
        } else {
            console.log('incorrect answer')
        }

    } 
    currentQuiz++;
    if(currentQuiz < dataQuiz.length){
        loadQuiz();
    }else{
        quizBox.classList.add('hide')
        const finishDiv = document.querySelector('.finish-quiz');

        finishDiv.classList.remove('hide');
        const lastDiv = document.createElement('div');
        let content = `
            <p style='color:red'> User: ${newUser.name}</p>
            <p> Age: ${newUser.age}</p>
            <p> Points: ${newUser.points}</p>
        `

        lastDiv.innerHTML = content;

        finishDiv.appendChild(lastDiv)
        
    }
    
}

