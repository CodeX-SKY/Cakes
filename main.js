let boxmodal = document.querySelector(".box-modal");
let modal = document.querySelector(".modal");
let btn = document.querySelector(".btn");
let x = document.querySelector(".x");

function remove(){
    modal.classList.remove('modal-hide', 'modal-add');
}

btn.addEventListener('click' , function(){
    if (modal.classList.contains('modal-add')){
        modal.classList.add('modal-hide');
    } else {
        modal.classList.add('modal-add');
        modal.removeEventListener('animationend' , remove);
    }
})
x.addEventListener('click' , function(){
    if (modal.classList.contains('modal-hide')){
        modal.classList.add('modal-add');
        modal.removeEventListener('animationend' , remove);
    } else {
        modal.classList.add('modal-hide');
        modal.addEventListener('animationend' , remove);
    }
})