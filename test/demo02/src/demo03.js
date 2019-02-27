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

var user = {
    id: 888,
    name: 'JerryHong',
    courseLists: [{
      "name": "My Courses",
      "courses": [{
        "id": 511019,
        "title": "React for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ id: 1, name: "JavaScript" }],
        "rating": 5
      }, {
        "id": 511020,
        "title": "Front-End automat workflow",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ "id": 2, "name": "gulp" }, { "id": 3, "name": "webpack" }],
        "rating": 4
      }]
    }, {
      "name": "New Release",
      "courses": [{
        "id": 511022,
        "title": "Vue2 for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ id: 1, name: "JavaScript" }],
        "rating": 5
      }, {
        "id": 511023,
        "title": "Angular2 for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ id: 1, name: "JavaScript" }],
        "rating": 4
      }]
    }]
  };

  var allCourseIds = [];


  Array.prototype.concatAll = function(){
      var result = [];

      this.forEach((array)=>{
          result.push.apply(result,array);
      })
      return result;
  }

  user.courseLists.forEach(list => {
    list.courses
      .filter(item => item.rating === 5)
      .forEach(item => {
        allCourseIds.push(item)
      })
  })

  console.log("allCourseIds:",allCourseIds);

  var allCourseIds = user.courseLists.map(list=>{
      return list.courses.filter(course=>course.rating === 5)
  }).concatAll()


  console.log("allCourseIds::",allCourseIds)



