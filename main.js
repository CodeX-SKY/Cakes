let x = document.querySelector(".x");
let modal = document.querySelector(".modal");
let btn = document.querySelector(".btn");

btn.addEventListener('click' , function(){
    modal.classList.toggle('modal-add');
})
x.addEventListener('click' , function(){
    modal.classList.remove('modal-add');
})