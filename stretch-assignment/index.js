let blockRed = document.querySelector('.block-red');
let blockBlue = document.querySelector('.block-blue');
let blockGreen = document.querySelector('.block-green');
let blockPink = document.querySelector('.block-pink');
let blockGray = document.querySelector('.block-gray');

let blockRedLeft = 0, blockBlueLeft = 0, blockGreenLeft = 0, blockPinkLeft = 0, blockGrayLeft = 0

let timer

let blockList = Array.from(document.querySelectorAll('.block'));

blockRed.addEventListener('click', (event) => {
    event.target.style.order = '-2';
    orderBlocks(event.target.classList[1]);
})

blockBlue.addEventListener('click', (event) => {
    event.target.style.order = '-2';
    orderBlocks(event.target.classList[1]);
})

blockGreen.addEventListener('click', (event) => {
    event.target.style.order = '-2';
    orderBlocks(event.target.classList[1]);
})

blockPink.addEventListener('click', (event) => {
    event.target.style.order = '-2';
    orderBlocks(event.target.classList[1]);
})

blockGray.addEventListener('click', (event) => {
    event.target.style.order = '-2';
    orderBlocks(event.target.classList[1]);
})

blockRed.addEventListener('mousedown', (event) => {
    timer = setInterval(function(){
        if(event.target.style.left === '1800px')
        {
            clearInterval(timer)
            console.log('Reached max width')
        }
        else {
            console.log(event.target.style.left)
            blockRedLeft += 50;
            event.target.style.position = 'relative'
            event.target.style.left = blockRedLeft + 'px'
        }
    }, 100);
})

blockBlue.addEventListener('mousedown', (event) => {
    timer = setInterval(function(){
        if(event.target.style.left === '1800px')
        {
            clearInterval(timer)
            console.log('Reached max width')
        }
        else {
            console.log(event.target.style.left)
            blockBlueLeft += 50;
            event.target.style.position = 'relative'
            event.target.style.left = blockBlueLeft + 'px'
        }
    }, 100);
})

blockGreen.addEventListener('mousedown', (event) => {
    timer = setInterval(function(){
        if(event.target.style.left === '1800px')
        {
            clearInterval(timer)
            console.log('Reached max width')
        }
        else {
            console.log(event.target.style.left)
            blockGreenLeft += 50;
            event.target.style.position = 'relative'
            event.target.style.left = blockGreenLeft + 'px'
        }
    }, 100);
})

blockPink.addEventListener('mousedown', (event) => {
    timer = setInterval(function(){
        if(event.target.style.left === '1800px')
        {
            clearInterval(timer)
            console.log('Reached max width')
        }
        else {
            console.log(event.target.style.left)
            blockPinkLeft += 50;
            event.target.style.position = 'relative'
            event.target.style.left = blockPinkLeft + 'px'
        }
    }, 100);
})

blockGray.addEventListener('mousedown', (event) => {
    timer = setInterval(function(){
        if(event.target.style.left === '1800px')
        {
            clearInterval(timer)
            console.log('Reached max width')
        }
        else {
            console.log(event.target.style.left)
            blockGrayLeft += 50;
            event.target.style.position = 'relative'
            event.target.style.left = blockGrayLeft + 'px'
        }

    }, 100);
})

document.addEventListener('mouseup', () => {
    clearInterval(timer);
})



function orderBlocks (str) {
    let orderList = blockList.filter(elem => !elem.classList[1].includes(str));
    orderList.forEach(element => {
        element.style.order++;
    });
}