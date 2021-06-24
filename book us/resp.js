const nav = document.querySelector('nav');
const book = document.querySelector(".book-me");
// const overlay = document.querySelector(".model-bg");
// const close_btn = document.querySelector(".exit_btn");

let success = document.querySelector('.success')

// book.addEventListener("click", function() {
//     overlay.classList.remove('model-act')
//     console.log('clicked')
// });
// close_btn.addEventListener("click", function() {
//     overlay.classList.add('model-act')
//     console.log('clickd 22')
// });


window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});
let text = document.createTextNode("Successfully Booked")
book.addEventListener("click", function() {
    success.appendChild(text);
    success.setAttribute('style', "color:green ; font-size:18px ; font-weight:bold; padding-top:10px;")
})