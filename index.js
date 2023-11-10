/*  document.querySelector('.set').addEventListener('click',EventHandler);
* */
//TODO ^ this is my way of set all button set to call EventHandler//
/*    const numberOfButtons = document.querySelectorAll('.drum').length;
    for (let i = 0; i < numberOfButtons; i++) {
        document.querySelectorAll('.drum')[i].addEventListener('click',EventHandler);

    }*/ //TODO Lines of code is  more logical to write
function add(num1,num2) {
    return num1+num2;
}
function subtrac(num1,num2) {
    return num1-num2;
}
function multipli(num1,num2) {
    return num1*num2;
}
function divide(num1,num2) {
    return num1/num2;
}
function power(num1,num2) {
    return Math.pow(num1,num2);
}
function calculator(num1 ,num2 ,operator) {
    return operator(num1,num2);
}
/*function SrcSwap(fileLocation) {
    this.fileLocation=fileLocation;
    this.play=function (){
        fileLocation.play();
    }
}*/
function wiplash (key) {

    switch (key) {
        case 'w':
            var audio=new Audio('./sounds/Hi-hat.mp3');
            audio.play();
            break;
        case 'a':
            audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            audio=new Audio('./sounds/closed-high-hat-.mp3');
            audio.play();
            break;
        case 'd' :
            audio=new Audio('./sounds/Hi-hat.mp3');
            audio.play();
            break;
        case 'j':
            audio=new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            audio=new Audio('./sounds/kick-base.mp3');
            audio.play();
            break;
        case 'l':
            audio=new Audio('./sounds/clean-snare.mp3');
            audio.play();
            break;
        default:
            console.log('ended');

    }
}
const numberOfButtons = document.querySelectorAll('.drum').length;
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        let buttonText= this.innerHTML;
        wiplash(buttonText);
    });
}
document.addEventListener('keypress', function (event){
    wiplash(event.key);
});