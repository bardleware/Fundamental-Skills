var counter = 0;
var qCont = document.getElementById("qCont");
var w = window.innerWidth;

console.log("value of qCont" + qCont + "  w:" + w);

function qContReSize(){
    if (w >= 2000){
        qCont.style.width = "25%";
    } else if (w >= 1000){
        qCont.style.width = "50%";
    } else {
        qCont.style.width = "100%";
    };
};

var q = document.getElementById("question");
var qDiv = document.getElementById("qFrame");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var never = 0;
var rarely = 1;
var occasionally = 2;
var frequently = 3;
var veryFrequently = 4;

var d_count = 0;
var ax_count = 0;
var ag_count = 0;
var add_count = 0;
var ocd_count = 0;

var d = "Depression";
var ax = "Anxiety";
var ag = "Anger";
var add = "Attention/Impulse Control";
var ocd = "Obsessive/Compulsive";

var dangerBench = 3;
var probArea = 5;
var testResults = "Your Problem areas include:</br>";
var noProblemAreas = "Awesome!</br>Your test indicates you are doing a great job in self care.</br>No problem areas this time. :-)";

var question = [
    //depression
    "Feelings of sadness", "Moodiness", "Negativity", "Low energy", "Irritability", "Decreased interest in others", "Feelings of hopelessness about the future.", "Feelings of helplessness or powerlessness", "Feeling dissatisfied or bored", "Excessive Guilt", "Suicidal feelings", "Crying", "Lowered interest in things usually considered fun", "Sleep changes (too much or too little)", "Low self-esteem", "Decreased interest in sex", "Negative sensitivity to smells odors", "Forgetfulness", "Poor concentration",
    //anxiety
    "Feelings of nervousness or anxiety", "Panic attacks", "Muscle tension (headaches, sore muscles, hand tremor)", "Heart pounding, rapid heart rate, or chest pain", "Trouble breathing or feeling smothered", "Dizzy, faint, or unsteady on your feet", "Nausea or abdominal upset", "Sweating, hot or cold flashes, cold hands", "Tendency to predict the worst", "Fear of dying or being crazy", "Avoid public places for fear of an an attack", "Excessive conflict avoidance", "Excessive fear of being judged by others", "Persistent phobias", "Low motivation", "Excessive motivation", "Tics", "Poor handwriting", "Quick startle reaction", "Freeze in anxious situations", "Excessive worry about what others think", "Shyness or timidity", "Become embarrassed easily",
    //anger
    "Short fuse or periods of extreme irritability", "Periods of rage with little provocation", "Frequent misinterpretation of comments as negative", "Irritability that builds, then explodes, the recedes. Person often feels tired after", "Periods of spaciness or confusion", "Panic and or fear for no reason", "Visual or auditory changes, such as seeing shadows or hearing muffled sounds", "Frequent periods of feelings of being somewhere you have never been or not recalling a familiar place or person", "Sensitivity or mild paranoia", "Headaches or abdominal pain of uncertain origin", "History of a minor or major head injury", "Family history of violence or explosiveness", "Dark thoughts, such as suicidal or homicidal", "Periods of forgetfulness", "Memory Problems", "Reading comprehension problems", "Preoccupation with moral or religious ideas",
    //attention-impulse
    "Cannot sustain attention. Lots of careless mistakes", "Trouble sustaining attention in routine situations-homework, chores, paperwork", "Trouble listening", "Inability to finish things, poor follow-through", "Poor organization of time or space", "Distractibility", "Poor planning skills", "Lack of clear goals or forward thinking", "Difficulty expressing feelings", "Difficulty expressing empathy for others", "Excessive daydreaming", "Boredom", "Apathy or lack of Motivation", "Lethargy", "A feeling of spaciness or being 'in a fog' ", "Restlessness or trouble sitting still", "Difficulty Remaining seated in situations where remaining seated is expected", "Conflict seeking", "Talking too much or too little", "Blurting out of answers before questions have been completed", "Difficulty awaiting turn", "interruption of or intrusion on others (butting into conversations or games)", "Impulsivity (saying or doing things before thinking)", "Trouble learning from experience, makes repetitive mistakes",
    //ocd
    "Excessive or senseless worrying", "Being upset when things do not go your way", "Being upset when things are out of place", "Tendency to be oppositional or argumentative", "Tendency to have repetitive negative thoughts", "Tendency toward compulsive behaviors", "Intense dislike of change", "Tendency to hold grudges", "Trouble shifting attention from subject to subject", "Trouble shifting behavior form task to task", "Difficulties seeing options in situations", "Tendency to hold onto own opinion and not listen to others", "Tendency to get locked into a course of action whether or not it is good", "Being very upset unless things are done a certain way", "Perception by others that you worry too much", "Tendency to say no without first thinking about question", "Tendency to predict negative outcomes"];

var answer = [];
var ans = 0;
q.innerHTML = question[counter];



function response0() {
    submitResponse(never);
}
;

function response1() {
    submitResponse(rarely);
}
;

function response2() {
    submitResponse(occasionally);
}
;

function response3() {
    submitResponse(frequently);
}
;

function response4() {
    submitResponse(veryFrequently);
}
;

function submitResponse(ans) {
    if (answer.length < 100) {
        answer.push(ans);
        counter = counter + 1;
    }
    if (questionsRemain()) {
        q.innerHTML = question[counter];
    } else {
        scoreTest();
    }
}
;

function questionsRemain() {
    if (counter < 101) {
        return true;
    }
    ;
}
function deliverScore() {


    if (d_count < probArea && ax_count < probArea && ag_count < probArea && add_count < probArea && ocd_count < probArea) {
        q.innerHTML = noProblemAreas;
    } else {
        var dangerCounts = [d_count, ax_count, ag_count, add_count, ocd_count];
        var resultArray = [d, ax, ag, add, ocd];
        for (var k = 0; k < 5; k++) {
            if (dangerCounts[k] > probArea) {
                testResults = testResults + resultArray[k] + "</br>";
                console.log(testResults);
            }
        }

        q.innerHTML = testResults;
    }

}
;

function scoreTest() {
    var i = 0;
    while (i < 100) {
        do {
            if (answer[i] >= dangerBench) {
                d_count = d_count + 1;
            }
            i = i + 1;
            console.log(i)
        } while (i < 20);

        do {
            if (answer[i] >= dangerBench) {
                ax_count = ax_count + 1;
            }
            i = i + 1;
        } while (i < 43);

        do {
            if (answer[i] >= dangerBench) {
                ag_count = ag_count + 1;
            }
            i = i + 1;
        } while (i < 60);

        do {
            if (answer[i] >= dangerBench) {
                add_count = add_count + 1;
            }
            i = i + 1;
        } while (i < 84);

        do {
            if (answer[i] >= dangerBench) {
                ocd_count = ocd_count + 1;
            }
            i = i + 1;
        } while (i < 100);
    }
    q.innerHTML = "END OF TEST";
    btn0.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    qDiv.style.height = "250px";

    alert("The Test has completed.\nPlease click OK to receive your score.");
    deliverScore();
}
;

btn0.addEventListener('click', response0);
btn1.addEventListener('click', response1);
btn2.addEventListener('click', response2);
btn3.addEventListener('click', response3);
btn4.addEventListener('click', response4);

qContReSize(w, qCont);

alert("Welcome to the Amen Brain System Checklist.\n(Amen Test for short)\n\nThe Amen Brain System Checklist , is a tool to allow the test taker to gain a general knowledge of which parts of the brain are overactive and need to be regulated. This is not an official Amen Test but a programming project to practice my development of JavaScript and to provide an easy access to this assessment. The program is run in your browser, so none of your information is stored in my server.\n\nTHANK YOU AND ENJOY!");
