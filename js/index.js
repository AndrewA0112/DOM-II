// Your code goes here


// Header

let headerImg = document.querySelector('.intro img');
let headerTitle = document.querySelector('.logo-heading');
let headerMain = document.querySelector('.main-navigation');
let headerNav = document.querySelector('.nav-container');

    // Mouse Over Listener
headerImg.addEventListener('mouseover', (event) => {
    event.target.style.width = '80%';
    event.target.style.margin = '0 auto';
});

    // Mouse Leave Listener
headerImg.addEventListener('mouseleave', (event) => {
    event.target.style.width = '100%';
});

    // Key Down Listener
document.addEventListener('keydown', (event) => {
    if(headerTitle.textContent.length > 15)
        event.preventDefault();
    else{
        headerTitle.textContent = headerTitle.textContent + event.key;
    }
})
    // Mouse Over Listener
headerMain.addEventListener('mouseover', (event) =>
{
    event.target.style.backgroundColor = 'green';
})

    // Mouse Leave Listener
headerMain.addEventListener('mouseleave', (event) =>
{
    event.target.style.backgroundColor = 'white';
})

// Mouse Over Listener
headerTitle.addEventListener('mouseover', (event) => {
    headerTitle.style.backgroundColor = 'blue'
    event.stopPropagation();
})

    // Mouse Leave Listener
headerTitle.addEventListener('mouseleave', (event) => {
    headerTitle.style.backgroundColor = 'white'
    event.stopPropagation();
})

    // Mouse Over Listener
headerNav.addEventListener('mouseover', (event) => {
    event.stopPropagation();
})

// Main Content

let mainContent = document.querySelector('body');
let contentImg = document.querySelector('.content-section img')
let buttons = document.querySelector('.btn')

    // Double Click Listener
mainContent.addEventListener('dblclick', () => {
    alert('Hello!');
})

    // Copy Listener
mainContent.addEventListener('copy', (event) => {
    alert('Dont steal my text!');
    event.preventDefault();
})

    // Wheel Listener
mainContent.addEventListener('wheel', (event) => {
    alert('WEEEEE');
})

    // Click Listner
buttons.addEventListener('click', (event) => {
    alert('You are signed up!')
})

    // Drag Listener
contentImg.addEventListener('drag', (event) =>
{
    event.target.style.display = 'none';
})

    // Drag End Listener
contentImg.addEventListener('dragend', (event) =>
{
    event.target.style.display = 'initial';
})



// Footer
let footerText = document.querySelector('.footer p');

    // Mouse Over Listener
footerText.addEventListener('mouseover', (event) => {
    event.target.textContent = 'Don\'t steal our stuff :(';
})

    // Mouse Up Listener
footerText.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = 'red';
})