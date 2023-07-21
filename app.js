const question = [{
        'ques' : 'Full form of HTML',
        'a' : 'HYPERTEXT MARKUP LANGUAGE',
        'b': 'CASCADING STYLING SHEET',
        'c' : 'answer3',
        'd' : 'answer 4',
        'correct' : 'a'  
    },{
        "ques" :"The World Largest desert is ? ",
        'a' : 'Thar',
        'b': 'Kalahari',
        'c' : 'Sahara',
        'd' : 'Sonoran',
        'correct' : 'c'
    },{
        "ques": "What is the capital of India?",
        'a' : 'Delhi',
        'b': 'answer 2',
        'c' : 'answer3',
        'd' : 'answer 4',
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
        <h3>You got ${correct}/${total} correct</h3>
        <button onclick="location.reload()">re-play</button>
    </div>`
    return ;
}

loadQues();