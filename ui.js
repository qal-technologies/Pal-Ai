//response array
const greetings = ['hello', 'hi', 'xup', 'Hello','hey','Hey', 'Hi', 'Hola', 'hola', 'bonsour', 'good day', 'good morning', 'bonjour'];
const discuss = ['help', 'i need help', 'fine', 'okay', 'ok', 'nice', 'cool', 'I am fine', 'I\'m fine', 'good', 'pal', 'Pal', 'pal?'];
const stops = ['fuck', 'asshole', 'knack', 'fuck you'];
const intro = ['who are you?', 'who are you', 'what is your name?', 'what is your name', 'what\'s your name?'];
const resps = ['I am cool and you?', 'I\'m good and you?', 'nice and you?', 'I am fine and you','cool and you', 'good and you', 'nice and you', 'fine and you', 'i am fine and you', 'I\'m fine and you?'];
const asks = ['how are you?', 'how are you', 'how\'re you', 'how\'re you?', 'hi', 'how are you doing?', 'how are you doing'];
const helping = ['oh fine friend, how can I help you?', 'oh okay friend, how can I help you?', 'oh alright friend, how can I help you?'];
const error = ['Maybe there\'s an error somewhere, please ask again', 'I sincerely dont understand, can you rephrase that?', 'Oh friend, I actually don\'t understand what you\'re trying to say', 'Please I dont understand, Can you explain more please. Try adding keywords, punctuation marks or emphasize more on your topic...'];
const pal = ['I am Pal by name and you\'re?', 'My name is Pal!', 'I am your AI pal', 'You can call me pal..', 'I\'m your best pal and your productive AI, you can call me pal'];
const blank = ['Your input is empty', 'You didn\'t ask me anything', 'What did you ask me?', 'Empty...', 'Please input something in your textbox'];
const questions = ['what', 'what?']
//For response
function respond() {

    // creating the response and question paragraph
    //for response:
    const resp_p = document.createElement('p');
    resp_p.classList.add('response');
    // for question:
    const quest_p = document.createElement('p');
    quest_p.classList.add('question');

    //getting time in real time
    const time = new Date();
    const hr = time.getHours();
    const min = time.getMinutes();
    const day = time.getDate();

    //creating divs
    const div = document.createElement('div');
    const div2 = document.createElement('div');

    //getting the divs
    const chatWindow = document.getElementById('chat_window');
    const input = document.getElementById('input');
    const message = input.value.trim();
    input.value = '';

    //for randomizing the output of the array
      const rm = Math.round(Math.random() * asks.length);
         const rom = Math.round(Math.random() * resps.length);
         const err = Math.round(Math.random() * error.length);
         const pll = Math.round(Math.random() * pal.length);
         const hlp = Math.round(Math.random() * helping.length);
         const empt = Math.round(Math.random() * blank.length);

    //algorithm for day
    //algorithm for response
    if (greetings.includes(message.toLowerCase())) {
        quest_p.innerHTML = message + `<span class="time">${hr} : ${min}  | ${day} </span>`;
        resp_p.innerHTML = asks[rm] + `<span class="time">${hr} : ${min}  | ${day}</span>`;
    }
    else if (intro.includes(message.toLowerCase())) {
        quest_p.innerHTML = message + `<span class="time">${hr} : ${min} | ${day}</span>`;
        resp_p.innerHTML = pal[pll] + `<span class="time">${hr} : ${min}  | ${day}</span>`;
    }
    else if (asks.includes(message.toLowerCase())) {
        quest_p.innerHTML = message + `<span class="time">${hr} : ${min} | ${day}</span>`;
        resp_p.innerHTML = resps[rom] + `<span class="time">${hr} : ${min} | ${day}</span>`;
    }
    else if (resps.includes(message.toLowerCase())) {
        quest_p.innerHTML = message + `<span class="time">${hr} : ${min} | ${day}</span>`;
        resp_p.innerHTML = helping [hlp] + `<span class="time">${hr} : ${min}  | ${day}</span>`;
    }
    else if (discuss.includes(message.toLowerCase())) {
        quest_p.innerHTML = message + `<span class="time">${hr} : ${min}  | ${day}</span>`;
        resp_p.innerHTML = helping[hlp] + `<span class="time">${hr} : ${min}  | ${day}</span>`;
    }
    else if (message ==='') {
        quest_p.innerHTML = message + `<span class="time">${hr} : ${min}  | ${day}</span>`;
        resp_p.innerHTML = blank[empt] + `<span class="time">${hr} : ${min}  | ${day}</span>`;
    }
    else {       
        quest_p.innerHTML = message + `<span class="time">${hr} : ${min}  | ${day}</span>`;
        resp_p.innerHTML = error[err] + `<span class="time">${hr} : ${min} | ${day}</span>`;
    }
    div.appendChild(quest_p);
    div2.appendChild(resp_p);
    chatWindow.append(div, div2);
    chatWindow.scrollTop = chatWindow.scrollHeight;
};

let isDark = false; 
function theme() {
    const thm = document.getElementById('theme');
    const body = document.body;
    const chatWindow = document.getElementById('chat_window');
    const header = document.getElementById('header');
    const section = document.getElementById('down');

    isDark = !isDark;

    if (isDark) {

        chatWindow.style.backgroundColor = 'rgb(20, 20, 20)';
        body.style.backgroundColor = 'rgb(20, 20, 20)';
        header.style.backgroundColor = 'rgb(20, 20, 20)';
        section.style.backgroundColor = 'rgb(20, 20, 20)';
        section.style.color = 'white';
        
        thm.innerHTML = `<svg width="16" height="16" fill="currentColor" class="bi-sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>`;
    }
    else {

        chatWindow.style.backgroundColor = 'white';
        body.style.backgroundColor = 'white';
        header.style.backgroundColor = '#f6f6f6';
        section.style.backgroundColor = '#f5f5f5';
        section.style.color = 'black';

        thm.innerHTML = `<svg width="16" height="16" fill="currentColor" class="bi-moon-fill" viewBox="0 0 16 16" id="moon">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>`;
    }
}

let input = document.getElementById('input');
window.onload = () => input.focus();