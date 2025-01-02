console.log("......................  Task 1  ................................")
var index=['red','green','blue','yellow','orange',];
for(var i in index){
    console.log("color is " +index[i]+ " = " +i)
}
 

console.log("........................ Task 2 ...............................")

var arr=['cat','dog','rabbit','elephant','lion',]
for(var data of arr){
    console.log(" Name of the animal = " +data);
}

console.log('..........................Task 3 .................................')

var num=[2,4,6,8,10];
sum=0;
var i=0;
while(i<num.length){
   sum=sum + num[i];
   i++;
}
console.log(sum);

console.log("..................... Task 4 ......................................")

var num =[1,2,3,4,5];
var result=' ';
var i=num.length-1;
do{
   result=result + num[i] + " ";
   i--;
}
while(i>=0){
    console.log(result);
}

console.log("........................ Task 5 ..................................")

var num=[3,6,9,12,15,18];
var result=' ';
var i=num.length-1;
do{
    result +=num[i]+' ';
    i--;
}
while(i>=0){
    console.log(result);
}
console.log("....................... Task 6 ........................")

var alp=['a','b','c','d','e'];
var result=' ';
var i=alp.length-1;
while(i>=0){
   result+=alp[i] + ' ';
   i--;
}
console.log(result);