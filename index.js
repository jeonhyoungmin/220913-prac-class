// class ItsMe {
//   constructor(id, name, city){
//     id;
//     name;
//     city;
//   }
// }
// * 키와 값 매개변수가 같으면 이렇게 작성해도 됨.

class ItsMe {
  constructor(id, name, city){
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

// let arr = ["근", "상", "예", "두", "영"];
// let box = [];

// for(let i = 0; i < arr.length ; i++){
//   box.push(new ItsMe(i+1, arr[i], "대전"));
// }

let arr = ["근", "상", "예", "두", "영"];
let box = [];

  arr.forEach(function(value, index) {
    box.push(new ItsMe(index+1, value, "대전"));
  })

let boxNim = [];
box.map((value, index) => {
  boxNim.push(value.name + "님");
})

// console.log(boxNim)




console.log(box)

const fs = require('fs');
let saveFile = JSON.stringify(box, null, 1);
console.log(saveFile)
fs.writeFile('./test.json', saveFile, "utf-8", (err) => {
  if(err) throw err;
})









class ah extends ItsMe{
  constructor(id, name, city, eye) {
    super(id, name, city); // 원하는 거 상속받겠다
    this.eye = eye;
  }
}

let test = new ah(1, '아', '대전', true);
// console.log(test)