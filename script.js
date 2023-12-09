const questionText = document.getElementById('question-text')
let answer1Container, answer2Container, answer3Container, answer4Container;
answer1Container = document.getElementById('answer1')
answer2Container = document.getElementById('answer2')
answer3Container = document.getElementById('answer3')
answer4Container = document.getElementById('answer4')
const result = document.getElementById('result')

questionText.innerText = "Which of the 4 are NOT one of the 3 states of matter?";
answer1Container.innerText += " Solid"
answer2Container.innerText += " Liquid"
answer3Container.innerText += " Gas"
answer4Container.innerText += " Proton"
result.innerText = "You're wrong"