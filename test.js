const bck = document.getElementById('backgorund');
const anwser = document.getElementById('anwser');
const body = document.getElementById('body');
const header = document.getElementById('header');
let answers = ['PROSTE ŻE TAK', 'TAK, JEST KURWA NAJWIEKSZY SKURWIEL',
'A WY SOBIE SIEDZICIE JAK KOLEDZY W PARKU NA ŁAWCE'];

function newClassMate() {
    let randomNumber = Math.floor(Math.random() *(answers.length));
    anwser.innerHTML = answers[randomNumber];
    anwser.style.visibility = 'inherit';
    bck.style.visibility = 'inherit';
    anwser.style.opacity = '1';
    bck.style.opacity = '1';
};

anwser.addEventListener("click", function(){
    if(anwser.style.visibility = 'inherit'){
        anwser.style.visibility = 'hidden';
        bck.style.visibility = 'hidden';
        anwser.style.opacity = '0';
        bck.style.opacity = '0';
    }
});

console.log(answers);