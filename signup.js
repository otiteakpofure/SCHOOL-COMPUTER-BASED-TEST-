// this is the sign uo for the js 


const myForm =document.getElementById('myForm');
const exam = document.getElementById('exam-id');
const login =document.getElementById('login');
const email =document.getElementById('email');
const errorMessage = document.getElementById('errormessage');


myForm.addEventListener('submit', rejectMessage)

// creating functions for form validation 

function rejectMessage(e){
    e.preventDefault()
     let message =[];

    if(email.value === ""){
        message.push("Please enter an email address")
        errorMessage.innerText= message.join(",")
        // console.log('YOU HAVE MADE AN ERROR');
    }
     if(exam.value ===""){
      message.push("Please enter your exam ID")
       errorMessage.innerText= message.join(",")
    //    console.log("i am the king")
     }

   if(email.value.length > 5 && email.value.length < 15){
       message.push("This is not an appropraite mail address")
       errorMessage.innerText= message.join(",")
    //    console.log("I am a man")
   }

   if(isNaN(exam.value)){
       message.push("Your exam ID should be a number")
       errorMessage.innerText= message.join(",")
    //    console.log("I am the zzzzzz")
   }
   if(exam.value.length <6 ){
    message.push("Your exam ID should not be less than 6 numbers")
    errorMessage.innerText= message.join(",")
    // console.log("i am the lord") 
  }

   else{
      window.location =  'file:///C:/Users/outlo/Desktop/quizapp/questions.html ';
   }

    

}




// alert('Hello world')