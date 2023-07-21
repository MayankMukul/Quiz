const question = [{
        'ques' : 'HTML stands for __________',
        'a' : 'HyperText Markup Language',
        'b': 'HyperText Machine Language',
        'c' : 'HyperText Marking Language',
        'd' : 'HighText Marking Language',
        'correct' : 'a'  
    },{
        "ques" :"Which element is used for or styling HTML5 layout?",
        'a' : 'CSS',
        'b': ' jQuery',
        'c' : 'JavaScript',
        'd' : 'PHP',
        'correct' : 'a'
    },{
        "ques": "Javascript is an _______ language?",
        'a' : 'Object-Oriented',
        'b': 'Object-Based',
        'c' : 'Procedural',
        'd' : 'None of the above',
        'correct' : 'a'
    }
]

let index = 0;
let correct = 0, wrong = 0 ;
let total = question.length;
const ques = document.getElementById("ques");
const options = document.querySelectorAll('.options');

function loadQues(){
    if (index==total){
        return endquiz();
    }
    reset();
    const current_q = question[index];
    
    ques.innerHTML = `<div class="question">${index+1}.) ${current_q.ques}</div>`;
    options[0].nextElementSibling.innerText=current_q.a;
    options[1].nextElementSibling.innerText=current_q.b;
    options[2].nextElementSibling.innerText=current_q.c;
    options[3].nextElementSibling.innerText=current_q.d;
    return;
}

function submit() {
    let answer = getAnswer();
    let data = question[index];
    if (answer === data.correct){
        correct++;
    } else {
        wrong++;
    }
    index++;
    loadQues();
    return;

}

function getAnswer() {
    let answer ;
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

function reset() {
    options.forEach(
        (input) => {
            input.checked = false; 
            
        }
    )
    return
}

function endquiz() {
    
    document.getElementById("box").innerHTML = `
    <div class="title">
        <h2>Thank you for playing the quiz</h2>
        <h3>You Scored : ${correct}/${total} </h3>
        <button onclick="location.reload()">Play Again !!!</button>
    </div>`
    return ;
}

loadQues();