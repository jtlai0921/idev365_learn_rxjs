const Rx = require('rxjs/Rx');
const RxJs = require('rxjs');

// var subject = new Rx.Subject();
// var subject = new Rx.BehaviorSubject(0);
// var subject = new Rx.ReplaySubject(3);
var subject = new Rx.AsyncSubject();

subject.subscribe({
    next:x=>console.log('observerA:',x)
})

subject.next(1)
subject.next(2)
subject.next(3)
subject.next(4)
subject.next(5)
subject.next(6)

subject.subscribe({
    next:x=>console.log('observerB:',x)
})

subject.next(7)
console.log("before complete")
setTimeout(()=>{
    subject.complete()
    console.log("after complete")
},2000)

