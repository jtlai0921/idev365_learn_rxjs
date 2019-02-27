let arr = [1,2,3];

var iterator = arr[Symbol.iterator]()

console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )


function IteratorFromArray(arr){
    if(!(this instanceof IteratorFromArray)){
        throw new Error("请调用 new IteratorFromArray()!")
    }
    this._array = arr;
    this._cursor = 0;
}

IteratorFromArray.prototype.next = function(){
    return this._cursor < this._array.length 
    ? { value: this._array[this._cursor++],done:false }
    : { done: true,}
}

let it = new IteratorFromArray([1,2,3])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
