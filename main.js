'use strict';
var limit = 30;
var a = 0;
var b = 1;
console.log(a);

if(limit>0){
  console.log(b); 
}
//while(a + b <=30){
  //  var temp = b;
    //b = a + b;
    //a = temp;
 //console.log(b) 
//};
for ( a=0; a <= limit; ){
    var temp = a + b;
    a = b;
    b = temp;
    console.log(a);
};