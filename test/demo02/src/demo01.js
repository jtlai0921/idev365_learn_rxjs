var arr = ['Jerry','Anna']

// arr.forEach( (x,idx)=>console.log("index->",idx,x) )

Array.prototype.forEach = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i)
    }
}

arr.forEach( (x,idx)=>console.log("index->",idx,x) )



