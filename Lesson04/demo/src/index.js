const Rx = require('rxjs/Rx');
const RxJs = require('rxjs');

console.log("before subscribe...")
const observable1 = RxJs.interval(1000)
const observable2 = RxJs.interval(500)

const subscription = observable1.subscribe( x => console.log("main=======>",x) )
const childSubscription = observable2.subscribe( x => console.log("child---->",x) )

subscription.add(childSubscription)
// subscription.remove(childSubscription)


setTimeout(()=>{
    subscription.unsubscribe()
},5000)