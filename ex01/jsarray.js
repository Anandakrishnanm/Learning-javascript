const stdnts = [{
        Fname : "John",
        Lname : "Joy",
        age : 17,
        gender: "m",
},
{
    Fname : "Jojo",
    Lname : "Amber",
    age : 18,
    gender: "m",
},
{
    Fname : "Ann",
    Lname : "Maria",
    age : 17,
    gender: "f",
},
{
    Fname : "Thomas",
    Lname : "Mathew",
    age : 17,
    gender: "m",
},
{
    Fname : "Aravind",
    Lname : "R",
    age : 16,
    gender: "m",
}
];

const std = stdnts.find(item => item.Fname ==="Ann");
console.log(std);

const stdIndex = stdnts.findIndex(item=> item.Fname="Aravind");
console.log("Index of Aravind: ",stdIndex);

stdnts.push({Fname: "Philip", Lname:  "Cals", age: 16, gender: "m"});
console.log(stdnts);

stdnts.pop();
console.log("after pop : ",stdnts);

const length= stdnts.length;
console.log("length of the array: ",length);

stdnts.shift();
console.log("After shifting: ",stdnts);

stdnts.unshift({Fname: "John", Lname: "Joy", age: 17, gender: "m"});
console.log("After unshifted: ",stdnts);

const stdntsNew= stdnts.concat({Fname: "Arjun",Lname: "Raj", age: 18, gender: "m"});
console.log("After concat: ",stdntsNew);

const stdntsNew1 = [{Fname: "Arjun",Lname: "Raj", age: 18, gender: "m"}];
const stdntsNew2 = stdnts.concat(stdntsNew1);
console.log("After covating 2 array: ",stdntsNew2);

const std2 = stdnts.slice(0,3);
console.log("After slice(0,3): ",std2);

const std4 = stdnts.filter(item=> item.age===18);
console.log("Students with age 18 : ",std4);

const std5 = stdnts.map(item=> [item.Fname,item.Lname].join(" "));
console.log("After Mapping for fullname: ",std5);

const std6 = stdnts.reverse();
console.log("Reverse of array: ",std6);

