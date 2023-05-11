const darkmode = document.getElementById('darkmode');
const html = document.querySelector('html');

darkmode.addEventListener('click', ()=>{
    html.classList.toggle('darkmode');
})