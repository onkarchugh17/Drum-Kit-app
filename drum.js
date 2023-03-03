let numberOfDrumButtons = document.querySelectorAll('.drum').length;
let drumButton = document.querySelectorAll(".drum");

for (let index = 0; index < numberOfDrumButtons; index++) {
        drumButton[index].addEventListener("click" , function(){
            buttonHTML = this.drumButton;
            makeSound(buttonHTML)

        })
    
}

document.addEventListener("keypress" , function(event){
    makeSound(event.key)
})

let makeSound =(key)=> {

    if (key == 'w') {
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    if (key == 'a') {
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    }
    if (key == 's') {
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    }
    if (key == 'd') {
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
    if (key == 'j') {
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    }
    if (key == 'k') {
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    }
    if (key == 'l') {
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    }
}