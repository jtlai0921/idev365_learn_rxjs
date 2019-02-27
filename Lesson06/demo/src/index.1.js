const Rx = require('rxjs/Rx');
const RxJs = require('rxjs');

function v1(){
    //-------------------------------------------------v1
    var observer = {
        next:x=>console.log("next:",x),
        error:x=>console.error("error:",x),
        complete:x=>console.log("complete:",x),
    }

    Rx.Observable.from([1,2,3,4]).subscribe({
        next:x=>observer.next(10*x),
        error:(err)=>observer.error(err),
        complete:()=>observer.complete()
    })
}


function v2(){
    //----------------------------------------------v2
    Rx.Observable.create(function subscibe(observer){
        Rx.Observable.from([1,2,3,4]).subscribe({
            next:x=>observer.next(10*x),
            error:(err)=>observer.error(err),
            complete:()=>observer.complete()
        })
    }).subscribe(x=>console.log(x))
}

function v3(){
    //----------------------------------------------v3
    function multiplyByTen(input){
        var output = Rx.Observable.create(function subscibe(observer){
            input.subscribe({
                next:x=>observer.next(10*x),
                error:(err)=>observer.error(err),
                complete:()=>observer.complete()
            })
        })

        return output;
    }
    var input = Rx.Observable.from([1,2,3,4])
    var output = multiplyByTen(input)
    output.subscribe(x=>console.log(x))

}


v1();
v2();
v3();
