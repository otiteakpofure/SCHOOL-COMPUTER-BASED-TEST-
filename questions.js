//array of questions and answers and options

const questions=[
    {
        question:"1) who is the president of Nigeria ?",
        a:"Muhammadu buhari",
        b:"Joe bidden",
        c:"James Cameron",
        d:"Cliff Booth",
        correct_answer:"Muhammadu buhari"

    },
    {
        question:"2) who is the president of United States of America ?",
        a:"Muhammadu buhari",
        b:"Joe Bidden",
        c:"James Cameron",
        d:"Cliff Booth",
        correct_answer:"Joe Bidden"

    },
    {
        question:"3). who is the president of Russia ?",
        a:"Muhammadu buhari",
        b:"Joe bidden",
        c:"James Cameron",
        d:"Vladimir Putin",
        correct_answer:"Vladimir Putin"

    },
    {
        question:"4). who is the president of Ukraine ?",
        a:"Muhammadu buhari",
        b:"Joe bidden",
        c:"james Cameron",
        d:"Volodymr Zelensky",
        correct_answer:"Volodymr Zelensky"

    }
    
]

//end of questions array

// declaration of variables
const questionContainer =document.getElementById("questionContainer");
const optionContainer = document.getElementById("optionContainer");
const buttonContainer= document.getElementById("buttonContainer");
const next = document.getElementById("next");
const submitBtn =document.getElementById("submitBtn");
const myScore =document.getElementById("myScore");
const myPrint=document.getElementById("print")
const imageHide = document.getElementById("imageHide")
const countDown = document.getElementById("countdown")
const timeUp=document.getElementById("timeUp")

// declaration of varaibles 

let myQuiz = 0;

//initialize the score to zero 
let score=0;

//hide the submitbtn
submitBtn.style.display ='none';

// hide the print button
myPrint.style.display='none';

// hide the image 

imageHide.style.display ="none";

//hide the timeUp

timeUp.style.display="none";

// fontsize and color of timeup



// a function to help in providing the answers and questions on the screen
function loadQuestions(){
    //display question
  let questionMatch = questions[myQuiz]
  let myQuestion = questionMatch.question
//   console.log(myQuestion)
  questionContainer.textContent= myQuestion;
  questionContainer.style.textTransform ="uppercase";
  questionContainer.style.color='rgb(9, 9, 117)';
  questionContainer.style.fontWeight ='bold';


  //display options for questions 

  let options =`
  <input type='radio' name ='options' value='${questionMatch.a}'/>&nbsp;${questionMatch.a} <br><br>
  <input type='radio' name ='options' value='${questionMatch.b}'/>&nbsp;${questionMatch.b} <br><br>
  <input type='radio' name ='options' value='${questionMatch.c}'/>&nbsp; ${questionMatch.c} <br><br>
  <input type='radio' name ='options' value='${questionMatch.d}'/>&nbsp; ${questionMatch.d} <br><br>
  
  `
  optionContainer.innerHTML=options;
  optionContainer.fontFamily ='garamond';
}

loadQuestions()

// Click next to move to the nextquestion
next.addEventListener("click", validateNext);

function validateNext(){
    let radioCheck = document.querySelector('input[type= radio]:checked');
    // statement to check if the user clicked the work or not 
  
   if(!radioCheck){
    alert("Please select and option")
   }

   else {
       if(myQuiz === questions.length - 1 ){
        submitBtn.style.display='block';
        next.style.display='none';
       }

       //check for each user score per question
       if(radioCheck.value === questions[myQuiz].correct_answer){
            score+=5
            alert(`You score ${score}`)
            
       }
     

       //go to the next question iterator
       myQuiz++
       loadQuestions()
   }
       
    
}

// addeventlistenetothesubmitbutton
submitBtn.addEventListener("click", display)

//fucntion for submit 

function display(){
    questionContainer.style.display='none';
    optionContainer.style.display='none';
    next.style.display='none';
    submitBtn.style.display='none';
    // myScore.innerHTML=`Your Score is ${score} / ${questions.length *5}`;
    myScore.style.color ='rgb(9, 9, 117)';
    myPrint.style.display='block';
    imageHide.style.display='block';
    imageHide.style.borderRadius ='15px';
    imageHide.style.marginBottom = '15px';
  
}

myPrint.addEventListener('click',printMe);

function printMe(){
    window.print();
    
}

// form validation


// using form validation

//timer functionality 

// Timer functionality

let totalTime = 120;
let min = 0;
let sec = 0;
let counter = 0;
let timer = setInterval(myTimer, 1000)

function myTimer(){
    counter++;
    min = Math.floor((totalTime - counter)/60)
    sec = totalTime - min * 60 - counter
    // console.log(sec);

    
// const timerBox = document.getElementById('countdown')
// const timeLeft = document.getElementById('timeLeft')
countDown.textContent = min + " : " + sec  
countDown.style.fontSize = '1.5rem'
// timerBox.appendChild(timeLeft)

if(counter === totalTime){
    clearInterval(timer)
    timeUp.style.display = 'block'
    questionContainer.style.display = 'none'
    optionContainer.style.display = 'none'
    next.style.display = 'none'
    submitBtn.style.display = 'none'
    myScore.textContent= `You score ${score} / ${questions.length * 5}`
    myScore.style.fontSize = '40px'
    myScore.style.paddingTop = '100px'
    myScore.style.textAlign = 'center'
    myPrint.style.display = 'block'
    timeUp.style.color ="red";
    timeUp.style.fontSize="1.5rem";
}
}


