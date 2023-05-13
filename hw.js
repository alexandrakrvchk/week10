function say() {
    console.log('Я учу Java Script');
}

say();

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 256) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});


document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 256;
    if (offset < 0) {
        offset = 256;
    }
    sliderLine.style.left = -offset + 'px';
});