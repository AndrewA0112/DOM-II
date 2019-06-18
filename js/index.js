// Your code goes here


let headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseover', headerImgMouseOver);
headerImg.addEventListener('mouseleave', headerImgMouseLeave);

let headerTitle = document.querySelector('.logo-heading');
document.addEventListener('keydown', (event) => {
    if(headerTitle.textContent.length > 15)
        event.preventDefault();
    else{
        headerTitle.textContent = headerTitle.textContent + event.key;
    }
})

function headerImgMouseOver (e) {
    e.target.style.width = '50%';
    e.target.style.margin = '0 auto';
}

function headerImgMouseLeave (e) {
    e.target.style.width = '100%';
}

let headerMain = document.querySelector('.main-navigation');
headerMain.addEventListener('mouseover', (event) =>
{
    event.target.style.backgroundColor = 'green';
    event.stopPropagation();
})
headerMain.addEventListener('mouseleave', (event) =>
{
    event.target.style.backgroundColor = 'white';
    event.stopPropagation();
})

let headerNav = document.querySelector('.nav-container');
headerNav.addEventListener('mouseover', (event) => {
    event.stopPropagation();
})

let mainContent = document.querySelector('body');
mainContent.addEventListener('dblclick', () => {
    alert('Hello!');
})

mainContent.addEventListener('copy', (event) => {
    alert('Dont steal my text!');
    event.preventDefault();
})

mainContent.addEventListener('wheel', (event) => {
    alert('WEEEEE');
})

document.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = 'red';
})

let buttons = document.querySelector('.btn')
buttons.addEventListener('click', (event) => {
    alert('You are sign up!')
})


let contentImg = document.querySelector('.content-section img')
contentImg.addEventListener('drag', (event) =>
{
    event.target.style.display = 'none';
})
contentImg.addEventListener('dragend', (event) =>
{
    event.target.style.display = 'initial';
})




let footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseover', footerTextMouseOver)

function footerTextMouseOver (e) {
    e.target.textContent = 'Don\'t steal our stuff :(';
}