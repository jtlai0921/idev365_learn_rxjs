function Producer(){
    if(!(this instanceof Producer)){
        throw new Error("请使用new Producter()");
    }
    this.listeners = []
}

Producer.prototype.addListener = function(listener){
    if(typeof listener === "function"){
        this.listeners.push(listener)
    }else{
        throw new Error('listener 必须是 function')
    }
}

Producer.prototype.removeListener = function(listener){
    this.listeners.splice(this.listeners.indexOf(listener),1)
}

Producer.prototype.notify = function(message){
    this.listeners.forEach(listener=>{
        listener(message);
    })
}

Producer()

let egghead = new Producer()

function listener1(message){
    console.log("message:listener1",message)
}

function listener2(message){
    console.log("message:listener2",message)
}


egghead.addListener(listener1)
egghead.addListener(listener2)

egghead.notify('A new course!！！')




