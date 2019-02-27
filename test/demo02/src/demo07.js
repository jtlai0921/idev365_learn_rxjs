class InteratorFromArray {
    constructor(arr){
        this._array = arr;
        this._cursor = 0;
    }
    next(){
        return this._cursor < this._array.length
         ? { value:this._array[this._cursor++], done:false }
         : { done:true, }
    }
    map(callback){
        const iterator = new InteratorFromArray(this._array);
        return {
            next:()=>{
                const { done,value } = iterator.next()
                return {
                    done:done,
                    value:done?null:callback(value)
                }
            }
        }
    }
}


let it = new InteratorFromArray([1,2,3])
let newIt = it.map((value)=>{
    return value+3
})

console.log(newIt.next())
console.log(newIt.next())
console.log(newIt.next())
console.log(newIt.next())