//  Int float char string boolean long short

//  data types in javascript: 1. Number 2. String 3. Object 4.Array 5.Symbol 6. Boolean
// Javascript has dynamic Datatype.  only let, var, const

var x="hello"; 
console.log(typeof(x));
var y=50.76;
console.log(typeof(y));
var z="7"
console.log(typeof(z));
var p='h'
console.log(typeof(p))
var a=true
console.log(typeof(a));
// console.log(true+4);
console.log(false+5);
console.log(5+6+"  Hello")
console.log("hello"+10+3)
// Array 1D
//Arrey 2D
var car=["BMw", "audi", "ford",7, 9, "volvo"]
var car=[]
console.log(car [1],car[4])
console.log(car)
console.log(car[4])
console.log(car[6])
// Object 
var person={fName:"Samarth", 
            lName:"Shete", 
            phone:453525}
console.log(person.lName)
console.log(person.phone)
document.write(person.phone)
document.getElementById("para").innerHTML="Hello" //java operator

// homeWork:  Audio, Video, Radio button, image







// 2D Array

var array2D=[["apple",6,"toys",98],
            ["sunflowe","rose"],
            [8,"sun"],
             ["rose",7]]

            
// 3D array=[[apple,6,"sun"][]]
var array3D=[[["apple",6,"toys",98],[6,8,4],["dfc","thff",7,5]],
            [["sunflowe","rose"],["pearl",6]],
            [[8,"sun"],["Basket","tuf"],[6,4,9]],
             [["rose",7],[4,"rty"]]]

// console.log(array2D)
// console.log(array2D[0][2])
// console.log(array2D[2][3])

console.log(array3D[3][1][1])
console.log(array3D[1][0][1])