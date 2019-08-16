function Quiz() {
    let questionArray = [{QUESTIONS:[], ANSWERS:[[],[],[],[]], CORRECT:[]}];
    class Question {
        constructor(Q1, A1, A2, A3){
            this.quest = Q1;
            this.answer1 = A1;
            this.answer2 = A2;
            this.answer3 = A3;
        }
    }
    let Quest1 = new Question("How many yards is a football field?", "1. 120", "2. 100", "3. 110");
    let Quest2 = new Question("What game come out first? (Officially Release)", "1. Overwatch", "2. Paladins", "3. Battleborn");
    let Quest3 = new Question("What is the first game ever released?", "1. Super Mario Bros", "2. Pong", "3. Pac-Man");
    let Quest4 = new Question("How many players can be on the football at a time per team?", "1. 22", "2. 7", "3. 11");
    questionArray[0].QUESTIONS.push(Quest1.quest);
    questionArray[0].ANSWERS[0].push(Quest1.answer1);
    questionArray[0].ANSWERS[0].push(Quest1.answer2);
    questionArray[0].ANSWERS[0].push(Quest1.answer3);
    questionArray[0].QUESTIONS.push(Quest2.quest);
    questionArray[0].ANSWERS[1].push(Quest2.answer1);
    questionArray[0].ANSWERS[1].push(Quest2.answer2);
    questionArray[0].ANSWERS[1].push(Quest2.answer3);
    questionArray[0].QUESTIONS.push(Quest3.quest);
    questionArray[0].ANSWERS[2].push(Quest3.answer1);
    questionArray[0].ANSWERS[2].push(Quest3.answer2);
    questionArray[0].ANSWERS[2].push(Quest3.answer3);
    questionArray[0].QUESTIONS.push(Quest4.quest);
    questionArray[0].ANSWERS[3].push(Quest4.answer1);
    questionArray[0].ANSWERS[3].push(Quest4.answer2);
    questionArray[0].ANSWERS[3].push(Quest4.answer3);
    questionArray[0].CORRECT.push("1");
    questionArray[0].CORRECT.push("3");
    questionArray[0].CORRECT.push("2");
    questionArray[0].CORRECT.push("3");
    // console.log(questionArray[0].QUESTIONS[0]);
    // console.log(questionArray[0].ANSWERS[0]);
    // console.log(questionArray[0].QUESTIONS[1]);
    // console.log(questionArray[0].ANSWERS[1]);
    // console.log(questionArray[0].QUESTIONS[2]);
    // console.log(questionArray[0].ANSWERS[2]);
    // console.log(questionArray[0].QUESTIONS[3]);
    // console.log(questionArray[0].ANSWERS[3]);
    // console.log(questionArray[0].CORRECT);
    alert("Welcome to Shoshard's Quiz!");
    alert("Make sure your Console in open so you can see the Answers.");
    var quiz = 0;
    var corrAn = 0;
    while (quiz === 0){
        var logCheck = prompt("Is your Console open?\nYES or NO");
        if (logCheck.toUpperCase() === "NO"){
            alert("Please open the Console Log, then reload the page.\n(Chrome: Ctrl+Shift+i)\n(FireFox: Right Click on the page, then Left Click on Inspect Element(Q))");
            break;
        }
        else if (logCheck.toUpperCase() === "YES"){
            alert("Thank You for having the Console open,\n You may Continue.");
            alert("There are four questions you must answer. \nGood Luck!!!!");
            var first = 0;
            console.log("Correct Answers:" + corrAn);
            while (first ===0){
                console.log(questionArray[0].ANSWERS[0][0]);
                console.log(questionArray[0].ANSWERS[0][1]);
                console.log(questionArray[0].ANSWERS[0][2]);
                var uAnswer1 = prompt("Question 1\n" + questionArray[0].QUESTIONS[0] + "\nAnswer with corresponding number.");
                if (uAnswer1 === questionArray[0].CORRECT[0]){
                    alert("Correct");
                    console.clear();
                    first++;
                    corrAn++;
                }
                else if (uAnswer1 === "2" || uAnswer1 === "3"){
                    alert("INCORRECT");
                    console.clear();
                    first++;
                }
                else {
                    alert("INVALID ANSWER");
                    console.clear();
                }

            }
            console.log("Correct Answers:" + corrAn);
            var sec =0;
            while (sec === 0){
                console.log(questionArray[0].ANSWERS[1][0]);
                console.log(questionArray[0].ANSWERS[1][1]);
                console.log(questionArray[0].ANSWERS[1][2]);
                var uAnswer2 = prompt("Question 2\n" + questionArray[0].QUESTIONS[1] + "\nAnswer with corresponding number.");
                if (uAnswer2 === questionArray[0].CORRECT[1]){
                    alert("Correct");
                    console.clear();
                    sec++;
                    corrAn++;
                }
                else if (uAnswer1 === "2" || uAnswer1 === "1"){
                    alert("INCORRECT");
                    sec++;
                    console.clear();
                }
                else {
                    alert("INVALID ANSWER");
                    console.clear();
                }
            }
            console.log("Correct Answers:" + corrAn);
            var third = 0;
            while (third ===0){
                console.log(questionArray[0].ANSWERS[2][0]);
                console.log(questionArray[0].ANSWERS[2][1]);
                console.log(questionArray[0].ANSWERS[2][2]);
                var uAnswer3 = prompt("Question 3\n" + questionArray[0].QUESTIONS[2] + "\nAnswer with corresponding number.");
                if (uAnswer3 === questionArray[0].CORRECT[2]){
                    alert("Correct");
                    console.clear();
                    third++;
                    corrAn++;
                }
                else if (uAnswer1 === "1" || uAnswer1 === "3"){
                    alert("INCORRECT");
                    third++;
                    console.clear();
                }
                else {
                    alert("INVALID ANSWER");
                    console.clear();
                }
            }
            console.log("Correct Answers:" + corrAn);
            var forth = 0;
            while (forth ===0){
                console.log(questionArray[0].ANSWERS[3][0]);
                console.log(questionArray[0].ANSWERS[3][1]);
                console.log(questionArray[0].ANSWERS[3][2]);
                var uAnswer4 = prompt("Question 4\n" + questionArray[0].QUESTIONS[3] + "\nAnswer with corresponding number.");
                if (uAnswer4 === questionArray[0].CORRECT[3]){
                    alert("Correct");
                    console.clear();
                    forth++;
                    corrAn++;
                }
                else if (uAnswer1 === "2" || uAnswer1 === "1"){
                    alert("INCORRECT");
                    forth++;
                    console.clear();
                }
                else {
                    alert("INVALID ANSWER");
                    console.clear();
                }
            }
            alert("Congratulations, You get " + corrAn + " questions right.");
            alert("Thank you for Completing the Quiz\n Reload Page to take again.");

            break;
        }
        else {
            alert("INVALID ANSWER");
        }
    }




}
Quiz();