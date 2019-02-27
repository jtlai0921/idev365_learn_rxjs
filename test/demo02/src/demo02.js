var newCourseList = [
	{
		"id": 511021,
		"title": "React for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511022,
		"title": "Vue2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511023,
		"title": "Angular2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511024,
		"title": "Webpack for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 4
	}
], idAndTitle = [];

Array.prototype.forEach = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i)
    }
}

Array.prototype.map = function(callback){
    let arr = []
    this.forEach((item,index)=>arr.push(callback(item,index)))
    return arr;
}

Array.prototype.filter = function(callback){
    let arr = []
    this.forEach((item,index)=> callback(item,index)&&arr.push(item) )
    return arr;
}

idAndTitle = newCourseList.map((item,index)=>({id:item.id,title:item.title}) )

console.log("idAndTitle:",idAndTitle)

let lessThan4 = newCourseList.filter((item,index)=>item.rating<=4)
console.log("lessThan4",lessThan4)

