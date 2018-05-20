window.onload = function startGame(){ 

    var count = 30;
    var counter=setInterval(timer, 1000); 

    function timer()
    {
        count=count-1;
        if(count == 0)
        {
        clearInterval(counter);
        return;
        }
        document.getElementById("timer").innerHTML = counter;
    }
    console.log(count);

    timer();

    function submitAnswers(){

        var total = 8;
        var score = 0;
        
        var q1 = document.forms["qForm"]["q1"].value
        var q2 = document.forms["qForm"]["q2"].value
        var q3 = document.forms["qForm"]["q3"].value
        var q4 = document.forms["qForm"]["q4"].value
        var q5 = document.forms["qForm"]["q5"].value
        var q6 = document.forms["qForm"]["q6"].value
        var q7 = document.forms["qForm"]["q7"].value
        var q8 = document.forms["qForm"]["q8"].value

            var correctAnswers = ["b", "d", "c" ,"c", "d", "c", "a", "b"];
            console.log(correctAnswers);

                if(q1 == correctAnswers[0]){
                    score++;
                }
                if(q2 == correctAnswers[1]){
                    score++;
                }
                if(q3 == correctAnswers[2]){
                    score++;
                }
                if(q4 == correctAnswers[3]){
                    score++;
                }
                if(q5 == correctAnswers[4]){
                    score++;
                }
                if(q6 == correctAnswers[5]){
                    score++;
                }
                if(q7 == correctAnswers[6]){
                    score++;
                }
                if(q8 == correctAnswers[7]){
                    score++;
                }
            
            var results = document.getElementById("results");
            results.innerHTML = 'You scored ' +score+ ' out of ' +total ;

        return false;
    }
}