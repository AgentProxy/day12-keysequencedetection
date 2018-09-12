const pressed = [];
const secretCode = 'eric';

window.addEventListener('keyup', (e)=>{
    pressed.push(e.key);
    
    pressed.splice((-secretCode.length -1), (pressed.length - secretCode.length));
    console.log(pressed.join(''));
    if(pressed.join('').includes(secretCode)){
        const body = document.querySelector('body');
        const message = document.querySelector('#message');
        body.className = "show";
        message.innerHTML = "PWNED BY AGENTPROXY";
    }
});


