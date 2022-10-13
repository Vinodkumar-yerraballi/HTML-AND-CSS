var body= "return Math.PI *rad  *rad "
var circle=new Function("rad",body);
alert(circle(5))
//Arrow functio
const myfunc=(a,b,c)=>{return a*b*c}
let product =myfunc(5,6,8)
document.getElementById("demo").innerHTML="The product of the element is "+ product
// Generator function
function* generatefunc(){
    yield 1;
    yield 2;
    yield 3;

}
let generator=generatefunc();
let one =generator.next();
let two =generator.next();
let three =generator.next();
alert(JSON.stringify(one));
alert(JSON.stringify(two));
alert(JSON.stringify(three));

// Predifiend function
let x=6;
let y=16;
let z=11;

console.log(eval("x+y"))
console.log(eval(z))