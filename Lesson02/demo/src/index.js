const Rx = require('rxjs/Rx');

function testNormalCode(){
    var button = document.querySelector("#normal")
    var count = 0;
    var rate = 1000;
    var lastClick = Date.now() - rate;
    button.addEventListener('click',(event)=>{
        if(Date.now() - lastClick >= rate ){
            count += event.clientX;
            console.log(`${count} clicked`);
            lastClick = Date.now();
        }
    })
}

function testRxJSCode(){
    var button = document.querySelector("#rxjs");
    Rx.Observable.fromEvent(button,"click")
        .throttleTime(1000)
        .map(event=>event.clientX)
        .scan((count,clientX)=>count+clientX,0)
        .subscribe(count=>console.log(`Rx subscribe:Clicked:${count}`));
}

testNormalCode();
testRxJSCode();
