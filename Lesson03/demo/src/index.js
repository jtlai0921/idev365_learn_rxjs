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
    const Observable =  Rx.Observable;
    const observable = Observable.create(function(observer){
       try{
        observer.next(1);
        observer.next(2);
        observer.next(3);
        console.log(buttton.a.b.c)
        setTimeout(()=>{
            observer.next(4);
            observer.complete();
        },1000);
       }catch(err){
        observer.err(err)
       }
    })

    console.log("subscribe 之前");
    const observer = {
        next:x=>console.log('get value'+x),
        error:err => console.error("有些错误发生了"),
        complete:()=>console.log("已完成！")
    }

    // observable.subscribe(observer)

    // observable.subscribe( x =>{
    //     console.log('Observer got a next value: ' + x)
    // } );


    observable.subscribe( 
        x=>console.log('get value'+x),
        err => console.error("有些错误发生了"),
        ()=>console.log("已完成！")
     );

}

// testNormalCode();
// testRxJSCode();


// const observable = Rx.Observable.from([10,20,30])
// const subscription = observable.subscribe( x => console.log(x) )
// subscription.unsubscribe();

function subscribe(observer){
    var intervalId = setInterval(()=>{
        observer.next("hi")
    },1000)

    return function unsubscribe(){
        clearInterval(intervalId)
    }
}

// var observable = Rx.Observable.create(subscribe)
// let subscription = observable.subscribe(msg=>console.log("Say:",msg))

// setTimeout(()=>{
//     subscription.unsubscribe()
// },5000)


const unsubscribe = subscribe({
    next:(x)=>console.log(x)
})

setTimeout(()=>{
    unsubscribe()
},5000)