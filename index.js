// alert("Lets Go, Jai Shree Ram")


// using annonymus function (python ka lambda fuction)
// document.querySelectorAll("button")[0].addEventListener("click",function (){alert("W: Somebody is touching me!!!!")})
// getting all the buttons by class


// This is for detecting mouse click
var totalLength_button = document.getElementsByClassName("drum").length;


for(var i = 0 ; i<totalLength_button ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){ // this statement is adding the functionality of add event to all the buttons
        // console.log(this.innerHTML); → this will give us which button is clicked

        // var buttonClicked = console.log(this.innerHTML);
        // this.style.color = 'white';
        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        playMusic(buttonInnerHTML);
    });
}

// this id for detecting button press
document.addEventListener("keydown",function(event){
    buttonAnimation(event.key);
    playMusic(event.key)
    // console.log(event);
});


function playMusic(Key){
    switch (Key) {
        case "w":
            console.log(Key);
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            console.log(Key);
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            console.log(Key);
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            console.log(Key);
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            console.log(Key);
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            console.log(Key);
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            console.log(Key);
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default:
            console.log(Key);
    }
}


function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    var delayInMilliseconds = 150; //time delay

    setTimeout(function() {
    //your code to be executed after specified time delay
    activeKey.classList.remove("pressed");
    }, delayInMilliseconds);
}
// var audio = new Audio("./sounds/crash.mp3");
//         audio.play();