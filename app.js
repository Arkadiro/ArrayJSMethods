const array = [];
const obj = {
  id: 1,
  array: [],
  newArr: { id: [99,44,33]}
};

var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

addNumbers();

sortArray()

function sortArray(){
  this.array = [...obj.array];
  //this.array.sort();
  // newArr = [33];
  // this.array = this.array.concat(newArr);
  //this.array = this.array.filter((item)=>item > 3);
  //this.array = this.array.find((el)=> el>4);
  //this.array = this.array.indexOf(5);
  // this.array = this.array.entries();
  // this.array1= this.array.next().value;
  // this.array2 = this.array.next().value;
  // this.array3 = this.array.next().value;
  //this.array = this.array.every((el)=>el > 0);
  //this.array = this.array.map((el) => el * 2);
  //this.array.forEach(el=>console.log(el))
  //this.array = this.array.includes(2);
  //this.array = this.array.join(',');
  //this.array = this.array.split(',');
  //this.array = this.array.map(Number);
  //this.array = this.array.slice(0,1);
  //this.array = this.array.slice(0,1);
  //this.array = this.array.splice(0,2);
  //this.array.pop();
  //this.array.shift();
  //this.array.unshift(99,33,44);
  //this.array.push(99);
  //this.array.reverse();
  //this.array = this.array.some((el)=> el === 1);
  //this.array = this.array.reduce((total,el) => total * el);
  //this.array.sort((a,b)=>b-a);
  //this.array = findMax(this.array);

  // const newa = [];
  // const newb = [];

  // this.array.forEach(el=>{
  //   if(el < 10) {
  //     newa.push(el);
  //   } else if (el > 10) {
  //     newb.push(el);
  //   }
  // })
  // this.array = newb.concat(newa);
  // this.array = newa.concat(newb);
  // this.array.sort((a,b) => a - b);
  //this.array = cars.sort((a,b)=> a.year - b.year);
  //this.array = cars.filter((el)=> el.year > 2010);
  console.log(this.array);
  //transformObj(this.array);
}


function addNumbers(){
  this.array = [...array];
  for (let i = 0; i <= 6; i++){
    this.array.push(Math.floor(Math.random()*i)+1);
  }
  this.array.push(99);
  obj.array = this.array;
  console.log(this.array);
}

function transformObj(obj) {
  if(typeof(obj) === "object") {
    for (let prop in obj) {
      if (typeof obj[prop] == "object"){
        transformObj(obj[prop])
      } else {
        console.log(prop+' '+obj[prop])
      }
    }
  } 
}

function findMax(array){
  return Math.max.apply(null, array)
} 