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
function SrcSwap(fileLocation) {
    this.fileLocation=fileLocation;
    let audio=new Audio(fileLocation);
    audio.play();
}
function wiplash (key) {
    switch (key) {
        case 'w':
            let audio=new SrcSwap('./sounds/Hi-hat.mp3');
            break;
        case 'a':
            let tom2=new SrcSwap('./sounds/tom-2.mp3');
            break;
        case 's':
            let closedhighhat=new SrcSwap('./sounds/closed-high-hat-.mp3');
            break;
        case 'd' :
            let hihat=new SrcSwap('./sounds/Hi-hat.mp3');
            break;
        case 'j':
            let snare=new SrcSwap('./sounds/snare.mp3');
            break;
        case 'k':
            let kick=new SrcSwap('./sounds/kick-base.mp3');
            break;
        case 'l':
            let cleanSnare=new SrcSwap('./sounds/clean-snare.mp3');
            break;
        default:
            console.log('ended');

    }
}
function buttonAnimation(currentKey) {
    document.querySelector('.'+currentKey).classList.add('pressed');
    setTimeout(function (){
        document.querySelector('.'+currentKey).classList.remove('pressed');
    },50);
}
/*function newEvent(eventtype,callBack) {
    anotherevent ={
        typeOfEvent:'keypress',
        kybordEvent:'p',
        duration:2
    }
    if (anotherevent.typeOfEvent===eventtype)
        callBack(eventtype);
}
document.addEventListener('keypress', function (event) {
    newEvent('p',event);
    console.log(event);
});*/
const numberOfButtons = document.querySelectorAll('.drum').length;
for (let i = 0; i < numberOfButtons; i++) {
document.querySelectorAll('.drum')[i].addEventListener('click', function (){
    let buttonText= this.innerHTML;
    wiplash(buttonText);
    buttonAnimation(buttonText);
});
    }
document.addEventListener('keypress', function (event){
    wiplash(event.key);
    buttonAnimation(event.key);
});
