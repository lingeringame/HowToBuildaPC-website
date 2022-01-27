const submit = document.querySelector('#button');
var answers = ['b', 'c', 'd', 'a', 'a', 'c', 'b', 'd', 'a'];
var result=document.querySelector('.score');

const resultDiv = document.querySelector('.score h2')
const resultDivCoord = resultDiv.getBoundingClientRect(); //gets Top coordinates of the score div element
const navBarCoor = document.querySelector('.interactiveButtons').clientHeight; //gets height of fixed navigation bar

submit.addEventListener('click', function(e) {
    e.preventDefault();
    var questionsnum = 9;
    var points=0;
    var percent = 0;

    var array = [document.forms['trivia']['Q1'].value,
                document.forms['trivia']['Q2'].value,
                document.forms['trivia']['Q3'].value,
                document.forms['trivia']['Q4'].value,
                document.forms['trivia']['Q5'].value,
                document.forms['trivia']['Q6'].value,
                document.forms['trivia']['Q7'].value,
                document.forms['trivia']['Q8'].value,
                document.forms['trivia']['Q9'].value]
  
    for(var x = 0; x < questionsnum; x++){
        if(array[x] == answers[x]){
            points++;
        } else if (array[x] === '') {
            alert("Select all answers");
            return false;
        }
    }
    percent = Math.round(100 * (points/questionsnum))
    result.innerHTML=`<h2>You scored ${points} out of 9 (${percent}%)</h2>`;
    window.scrollTo(0, resultDivCoord.top - navBarCoor);
    result.classList.add('line');
});
