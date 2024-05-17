let isDark = false; 
function theme() {
    const thm = document.getElementById('theme');
    const body = document.body;
    const header = document.getElementById('main');
    const pal = document.getElementById('pal');
    const email = document.getElementById('email');
    const footer = document.getElementById('footer');
    const passw = document.getElementById('password');

    isDark = !isDark;

    if (isDark) {

        body.style.backgroundColor = 'rgb(20, 20, 20)';
        header.style.backgroundColor = 'rgb(20, 20, 20)';
        pal.style.color = 'rgb(20, 20, 20)';
        email.style.color = 'white';
        passw.style.color = 'white';
        footer.style.color = 'white';

        thm.innerHTML = `<svg width="16" height="16" fill="currentColor" class="bi-sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>`;
    }
    else {

        body.style.backgroundColor = 'whitesmoke';
        header.style.backgroundColor = 'whitesmoke';
        pal.style.color = 'whitesmoke';
        email.style.color = 'black';
        passw.style.color = 'black';
        footer.style.color = 'black';

        thm.innerHTML = `<svg width="16" height="16" fill="currentColor" class="bi-moon-fill" viewBox="0 0 16 16" id="moon">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>`;
    }
}

let isLocked = false;
function unlock() {
    const email = document.getElementById('email');
    const key = document.getElementById('key');
    const passw = document.getElementById('password');
    const warn_p = document.getElementById('warning1');
    const warn_p2 = document.getElementById('warning2');

    isLocked = !isLocked;

    if (isLocked) {
        email.style.display = 'block';
        email.focus();
        email.value = '';
        passw.value = '';

        key.innerHTML = `<svg width="16" height="16" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
        <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
      </svg>`;
        
    }

    else if(!isLocked){
        email.style.display = 'none';
        passw.style.display = 'none';
        warn_p.style.display = 'none';
        warn_p2.style.display = 'none';

        key.innerHTML=`<svg width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg>`
    }
}

var email = '123@gmail.com';
var pass = '123';

function valid() {
    const mails = document.getElementById('email');
    let mail = mails.value;
    const warn_p = document.getElementById('warning1');
    const passw = document.getElementById('password');
    const warn_p2 = document.getElementById('warning2');

    if (mail === email) {
        warn_p2.style.display = 'none';
        warn_p.style.display = 'none';
        passw.style.display = 'block';
        passw.focus();
    }

    else if (mail!==email || mail ==''){
        warn_p2.style.display = 'none';
        warn_p.style.display = 'block';
        passw.style.display = 'none';
        mails.focus();
        mails.value = '';
    }

}

function passValid() {
    const passw = document.getElementById('password');
    const warn_p2 = document.getElementById('warning2');

    if (passw.value === pass) {
        warn_p2.style.display = 'none';
        return true;
    }
    else{
        warn_p2.style.display = 'block';
        passw.value = '';
        passw.focus();
    }
}

function logging() {
    const mail = document.getElementById('email');
    const passw = document.getElementById('password');

    if (mail.value === email && passw.value === pass) {
        return true;
    }
    else {
        return false;
    }
}