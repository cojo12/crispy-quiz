var questions = '';
var score = 0;

for(var i=0; i < questions.length; i++);
    var answer = window.prompt(questions[i].prompt);
    if (response === questions[i].answer){
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
    }
    alert('you got ' + score + '/' + questions.length);
