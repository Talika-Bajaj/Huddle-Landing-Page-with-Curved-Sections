const subscribe = document.querySelector('.subscribe');
let input = document.getElementById('input');
const valid = document.querySelector('.valid');

subscribe.addEventListener('click', validateEmail);

function validateEmail() {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(pattern)) {
        document.getElementById('input').value == '';
        input.style.border = 'none';
        valid.style.display = 'none';
    } else {
        document.getElementById('input').value == '';
        input.style.border = '1px solid hsl(0, 100%, 63%)';
        valid.style.display = 'block';
    }
}
