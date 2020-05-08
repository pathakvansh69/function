//alert("burraahh")
//console.log("burrah");

//call()
let p1={name:'Ramesh',Age:12};
let p2={name:'Suresh',Age:15};

let hello=function(){
    console.log(this.name);
};

//hello.call(p1);
//hello.call(p2);
//hello();

//apply()

function intro(name,profession){
    console.log(name +' is a '+profession);
    console.log(this);
}

//intro('john','doctor');
//intro.apply(undefined,['Mary','Nurse']);
//intro.call(undefined,'Angus','Guitarist');
//arrow functions

let message ={
    name : 'Ramesh',
    regularFunc : function(){
        console.log('hello '+this.name);
    },
    arrowFunc:() => {
        console.log('hii '+this.name);
    }
};

//message.arrowFunc();
//message.regularFunc();

// function sum(num1,num2)
// {
//     return num1+num2;
// }
let sum = (num1,num2) => num1+num2;

let output=sum(10,8 );
//console.log(typeof output);


//closures

function setUpCounter(val)
{
    return function counter()
    {
        return val++;
    } 
}
// let counter1=setUpCounter(0);
// let counter2=setUpCounter(5);
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
// console.log(counter1());
// console.log(counter2());



//scopes

function greeting()
{
    let message ='Hello';

    if(message=='Hello')
    {
        var myvar='hehehe'
    }
    let sayhi = function hey() {
         let message ='hi';

        console.log(message);
    };

    //console.log(message);
    sayhi();
    console.log(myvar);
}

//greeting();