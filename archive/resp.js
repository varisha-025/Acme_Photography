var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

let i = 0;
let images = [];
images[0] = "img/image15.jpg"
images[1] = "img/image17.jpg"
images[2] = "img/image16.jpg"
images[3] = "img/image4.jpg"
images[4] = "img/image5.jpg"
images[5] = "img/image18.jpg"
images[6] = "img/image7.jpg"
images[7] = "img/image8.jpg"
images[8] = "img/image9.jpg"
images[9] = "img/image10.jpg"
images[10] = "img/image11.jpg"
images[11] = "img/image12.jpg"
images[12] = "img/image13.jpg"
images[13] = "img/image14.jpg"
repeat = () => {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("repeat()", 2000);
}
window.onload = repeat;