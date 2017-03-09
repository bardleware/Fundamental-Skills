var testQuestions = [
    //Prefrontal Cortex
    "Fails to give close attention to details or makes careless mistakes",
    "Trouble sustaining attention in routine situations (i.e., homework, chores, Paperwork)",
    "Trouble listening",
    "Fails to finish things",
    "Poor organization for time or space (such as backpack, room, desk, paperwork)",
    "Avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort",
    "Loses things",
    "Easily distracted",
    "Forgetful",
    "Poor planning skills",
    "Lack clear goals or forward thinking",
    "Difficulty expressing feelings",
    "Difficulty expressing empathy for others",
    "Excessive daydreaming",
    "Feeling bored",
    "Feeling apathetic or unmotivated",
    "Feeling tired, sluggish or slow moving",
    "Feeling spacey or \“in a fog\”",
    "Fidgety, restless or trouble sitting still",
    "Difficulty remaining seated in situations where remaining seated is expected",
    "Runs about or climbs excessively in situations in which it is inappropriate",
    "Difficulty playing quietly",
    "\"On the go\" or acts as if \"driven by a motor\"",
    "Talks excessively",
    "Blurts out answers before questions have been completed",
    "Difficulty waiting turn",
    "Interrupts or intrudes on others (e.g., butts into conversations or games)",
    "Impulsive (saying or doing things without thinking first)",

    //Cingulate
    "Excessive or senseless worrying",
    "Upset when things do not go your way",
    "Upset when things are out of place",
    "Tendency to be oppositional or argumentative",
    "Tendency to have repetitive negative thoughts",
    "Tendency toward compulsive behaviors",
    "Intense dislike for change",
    "Tendency to hold grudges",
    "Trouble shifting attention from subject to subject",
    "Trouble shifting behavior from task to task",
    "Difficulties seeing options in situations",
    "Tendency to hold on to own opinion and not listen to others",
    "Tendency to get locked into a course of action, whether or not it is good",
    "Needing to have things done a certain way or you become very upset",
    "Others complain that you worry too much",
    "Tend to say no without first thinking about question",
    "Tendency to predict fear",

    //Limbic
    "Frequent feelings of sadness",
    "Moodiness",
    "Negativity",
    "Low energy",
    "Irritability",
    "Decreased interest in others",
    "Decreased interest in things that are usually fun or pleasurable",
    "Feelings of hopelessness about the future",
    "Feelings of helplessness or powerlessness",
    "Feeling dissatisfied or bored",
    "Excessive guilt",
    "Suicidal feelings",
    "Crying spells",
    "Lowered interest in things usually considered fun",
    "Sleep changes (too much or too little)",
    "Appetite changes (too much or too little)",
    "Chronic low self-esteem",
    "Negative sensitivity to smells/odors",

    //Basal Ganglia
    "Frequent feelings of nervousness or anxiety",
    "Panic attacks",
    "Symptoms of heightened muscle tension (headaches, sore muscles, hand tremor)",
    "Periods of heart pounding, rapid heart rate or chest pain",
    "Periods of trouble breathing or feeling smothered",
    "Periods of feeling dizzy, faint or unsteady on your feet",
    "Periods of nausea or abdominal upset",
    "Periods of sweating, hot or cold flashes",
    "Tendency to predict the worst",
    "Fear of dying or doing something crazy",
    "Avoid places for fear of having an anxiety attack",
    "Conflict avoidance",
    "Excessive fear of being judged or scrutinized by others",
    "Persistent phobias",
    "Low motivation",
    "Excessive motivation",
    "Tics (motor or vocal)",
    "Poor handwriting",
    "Quick startle",
    "Tendency to freeze in anxiety provoking situations",
    "Lacks confidence in their abilities",
    "Seems shy or timid",
    "Easily embarrassed",
    "Sensitive to criticism",
    "Bites fingernails or picks skin",

    //Temporal Lobe
    "Short fuse or periods of extreme irritability",
    "Periods of rage with little provocation",
    "Often misinterprets comments as negative when they are not",
    "Irritability tends to build, then explodes, then recedes, often tired after a rage",
    "Periods of spaciness or confusion",
    "Periods of panic and/or fear for no specific reason",
    "Visual or auditory changes, such as seeing shadows or hearing muffled sounds",
    "Frequent periods of deja vu (feelings of being somewhere you have never been)",
    "Sensitivity or mild paranoia",
    "Headaches or abdominal pain of uncertain origin",
    "History of a head injury or family history of violence or explosiveness",
    "Dark thoughts, may involve suicidal or homicidal thoughts",
    "Periods of forgetfulness or memory problems"
];

var counter = 0;
var countdown = 101;

var question = document.getElementById("ques");
var guiCounter = document.getElementById("counter");

var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

btn0.addEventListener('click', response0);
btn1.addEventListener('click', response1);
btn2.addEventListener('click', response2);
btn3.addEventListener('click', response3);
btn4.addEventListener('click', response4);

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

var dangerBench = 3;
var probArea = 5;
var testResults = "Your Problem areas include:</br>";
var noProblemAreas = "Awesome!</br>Your test indicates you are doing a great job in self care.</br>No problem areas this time. :-)";

var answer = [];
var ans = 0;

question.innerText = testQuestions[counter];

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
    if (answer.length < 101) {
        answer.push(ans);
        counter = counter + 1;
        countdown = countdown - 1;
        guiCounter.innerText = countdown;
    }
    if (questionsRemain()) {
        question.innerText = testQuestions[counter];
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
