function *getNumber(words){
    for(let word of words){
        if(/^[0-9]+$/.test(word)){
            yield parseInt(word,10)
        }
    }
}

const iterator = getNumber('30 天精通 RxJS (054)')

console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )


