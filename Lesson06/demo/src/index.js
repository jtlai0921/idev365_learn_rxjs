const Rx = require('rxjs/Rx');
const RxJs = require('rxjs');
const { ajax } = require('rxjs/ajax');
const operators = require('rxjs/operators');
// const fs = require("fs")

// Rx.Observable.range(5,10).subscribe(x=>console.log(x))
// Rx.Observable.timer(1000,100).subscribe(x=>console.log(x))

// function test(callback){
//     setTimeout(()=>{
//         callback("hello")
//     },1000)
// }

// Rx.Observable.bindCallback(test)().subscribe(x=>console.log(x))

// fs.readdir(".",function(err,result){
//     console.log(result)
// })

// Rx.Observable.bindNodeCallback(fs.readdir)("./dsf").subscribe({
//     next:x=>console.log(x),
//     error:err=>console.log(err)
// })

var observable01 = Rx.Observable.create(function(observer){
    observer.next("11")
    observer.next("12")
    observer.next("13")
    observer.complete()
})

var observable02 = Rx.Observable.create(function(observer){
    observer.next("222")
    observer.complete()
})

var observable03 = Rx.Observable.create(function(observer){
    observer.next("333")
    observer.complete()
})

var observable04 = Rx.Observable.create(function(observer){
    observer.next("4")
    observer.complete()
})

var observable05 = Rx.Observable.create(function(observer){
    observer.next("5")
    observer.complete()
})

var observable06 = Rx.Observable.create(function(observer){
    observer.next("6")
    observer.complete()
})

var observable07 = Rx.Observable.create(function(observer){
    observer.next("7")
    observer.complete()
})


// Rx.Observable.concat(
//     observable01,
//     observable02,
//     observable03,
//     observable04,
//     observable05,
//     observable06,
//     observable07,
// ).subscribe(x=>console.log(x))

// Rx.Observable.empty().subscribe({
//     next:x=>console.log(x),
//     err:x=>console.log(x),
//     complete:x=>console.log("complete:",x),
// })


// Rx.Observable.fromPromise(new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve(123)
//     },1000)
// }), new Rx.Scheduler() ).subscribe({
//     next:x=>console.log(x),
//     err:x=>console.log(x),
//     complete:x=>console.log("complete:",x),
// })

// var timer1 = Rx.Observable.interval(1000).take(10).subscribe(x => console.log(x));
// var timer2 = Rx.Observable.interval(2000).take(6);
// var timer3 = Rx.Observable.interval(500).take(10);
// var concurrent = 2; // the argument
// var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
// merged.subscribe(x => console.log(x));

// Rx.Observable.of(1,2,3).take(2).subscribe(x => console.log(x));

// Rx.Observable.interval(1000).startWith(10).subscribe({
//         next:x=>console.log(x),
//         err:x=>console.log(x),
//         complete:x=>console.log("complete:",x),
//     })

// function * generateDoubles(seed){
//     var i = seed;
//     while(true){
//         yield i;
//         i = 2*i;
//     }
// }

// var iterator = generateDoubles(3)
// Rx.Observable.from(iterator).take(3)
//     .subscribe(x=>console.log(x))

// function info() {
//     console.log('Will not be called');
// }
// var result = Rx.Observable.never().startWith(7);
// result.subscribe(x => console.log(x), info, info);


// var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
// result.subscribe(x => console.log(x), e => console.error(e));

// var interval = Rx.Observable.interval(1000);
// var result = interval.mergeMap(x =>
//   x === 13 ?
//     Rx.Observable.throw('Thirteens are bad') :
//     Rx.Observable.of('a', 'b', 'c')
// );
// result.subscribe(x => console.log(x), e => console.error(e));

var clicks = Rx.Observable.fromEvent(document, 'click');
var interval = Rx.Observable.interval(1000);
var buffered = interval.buffer(clicks);
buffered.subscribe(x => console.log(x));

