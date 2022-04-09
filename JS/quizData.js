//User creator
function User(name,age,points){
    this.name = name;
    this.age = age;
    this.points = points;
};

//quiz
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