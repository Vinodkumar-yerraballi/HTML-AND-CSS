const start_button=document.getElementById('start_btn')
const next_button=document.getElementById('next_btn')


const questionContainerElement=document.getElementById('questions-container')
const questionelement=document.getElementById('question')
const answerbuttonelement=document.getElementById('answer buttons')


let shuffledQuestions,currectQuestionIndex;
let  quizscore=0;

start_button.addEventListener('click',startGame)
next_button.addEventListener('click',()=>{
    currectQuestionIndex++
    setNextQuestion()
})


function startGame(){
    start_button.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random() -0.5)
    currectQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    quizscore
}



function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex])
}



function showQuestion(question){
    questionelement.innerText=question.question;
    question.answer.forEach((answer)=>{
        const button = document.createElement('button')
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerbuttonelement.appendChild(button)
    })
}



function restart(){
    clearStatusClass(document.body)
    next_button.classList.add('hide')
    while(answerbuttonelement.firstChild){
        answerbuttonelement.removeChild(answerbuttonelement.firstChild)
    }
}


function selectAnswer(e){
    const selectdButton=e.target
    const correct=selectdButton.dataset

    setStatusClass(document.body.correct)
    Array.from(answerbuttonelement.children).forEach(button => {
        setStatusClass(button.dataset.correct)
        
    })
    if (shuffledQuestions.length>currectQuestionIndex+1){
        next_button.classList.remove("hide")
    
    }else{
        start_button.innerText='restart'
        start_button.classList.remove("hide")
    }
    if(selectdButton.dataset=correct){
        quizscore++
    }
    document.getElementById('right answer').innerText=quizscore
}







function setStatusClass(elemet,correct){
    clearStatusClass(elemet)
    if(correct){
        elemet.classList.add('correct')
    }else{
        elemet.classList.add('wrong')
    }

}

function clearStatusClass(elemet){
    elemet.classList.remove('correct')
    elemet.classList.remove('wrong')
}

const questions=[
    {
    question:'Which is the branch of the datascience?',
    answer:[
        {text:'AI',correct:true},
        {text:'Deep Learning',correct:false},
        {text:'Machine learning',correct:false},
        {text:'Computer science',correct:true}
    ],

    },
    {
        question:'Whcih is the python library?',
        answer:[
            {text:'react',correct:false},
            {text:'c++',correct:false},
            {text:'Ruby',correct:false},
            {text:'Pandas',correct:true}
        ]
    }
]
