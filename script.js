const questions=[
    {
        'que': 'If you have a bowl with six apples and you take away four, how many apples do you have?',
        'a': 'Two apples',
        'b': 'Four apples',
        'c': 'Six apples',
        'd': 'None',
        'correct' : 'b'
    },
    {
        'que': 'What animal hibernates the longest?',
        'a': 'Bears',
        'b': 'Koala',
        'c': 'Snail',
        'd': 'Sloth',
        'correct' : 'c'
    },
    {
        'que': 'What alcoholic drink is made with juniper berries?',
        'a': 'Gin',
        'b': 'Vodka',
        'c': 'Rum',
        'd': 'Wine',
        'correct' : 'a'
    },
    {
        'que': 'The speed of a computer mouse is measured in what units?',
        'a': 'Inches',
        'b': 'Paws',
        'c': 'Mickeys',
        'd': 'Pounds',
        'correct' : 'c'
    },
    {
        'que': 'What is the fastest land snake in the world?',
        'a': 'Sidewinder',
        'b': 'Black Mamba',
        'c': 'King Cobra',
        'd': 'Eastern Diamondback Rattlesnake',
        'correct' : 'a'
    },
    
]

let index=0;
let total= questions.length;
let correct=0;
let  wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs= document.querySelectorAll(".options")
const loadQuestion=() =>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data= questions[index]
    console.log(data)
    quesBox.innerText= `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText= data.a;
    optionInputs[1].nextElementSibling.innerText= data.b;
    optionInputs[2].nextElementSibling.innerText= data.c;
    optionInputs[3].nextElementSibling.innerText= data.d;
}

const submitQuiz=() =>{
    const data= questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        correct++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=() =>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked= false;
        }
    )
}

const endQuiz=() =>{
    document.getElementById("box").innerHTML=`
    <div style= "text-align:center"
        <h2> ${correct}/${total} are correct</h2>
        <br>
        <h3> Thank you for playing the quiz</h3>
    </div>
    `
}
loadQuestion();