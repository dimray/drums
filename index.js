// document.querySelector("button").addEventListener("click", function () { alert("I got clicked") });




var drums = document.getElementsByClassName("drum");
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        makeSound(drums[i].innerText);
        buttonAnimation(drums[i].innerText);
    })

};

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});



function buttonAnimation(currentKey) {
    keyToChange = document.querySelector("." + currentKey);
    keyToChange.classList.toggle("pressed");
    // setTimeout(function () {
    //     keyToChange.classList.remove("pressed")
    // }, 200);

}



function makeSound(key) {

    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;

        default:
            console.log(this.innerHTML);
    }



}
