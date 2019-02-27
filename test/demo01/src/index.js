const { timer,fromEvent, } = rxjs;
const { switchMap,map,startWith,scan,takeWhile,tap,mapTo, } = rxjs.operators;

const takeUntilFunc = (endRange,currentNumber)=>{
    return endRange > currentNumber 
        ? val => val <= endRange 
        : val => val >= endRange;
}

const positiveOrNegative = (endRange,currentNumber) => {
    return endRange > currentNumber ? 1 : -1;
}

const updateHTML = id => val => (document.querySelector(id).innerHTML = val );
const input  = document.querySelector('#range');
const updateButton = document.querySelector('#update');


const subscription = (function(currentNumber){
    return fromEvent(updateButton,"click")
        .pipe(
            map(_=>parseInt(input.value)),
            switchMap(endRange=>{
                console.log("switchMap",endRange)
                return timer(0,20).pipe(
                    mapTo(positiveOrNegative(endRange,currentNumber)),
                    startWith(currentNumber),
                    scan((acc,curr)=>acc+curr),
                    takeWhile(takeUntilFunc(endRange,currentNumber)),
                )
            }),
            tap(v=>(currentNumber = v)),
            startWith(currentNumber)
        )
        .subscribe(updateHTML('#display'));
})(0);