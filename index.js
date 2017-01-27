// a=1 b=26 c=120

var a = Number(prompt('enter a'));
var firstPart = a +'(x*x)';
document.write(firstPart);

var b = Number(prompt('enter b'));
var secondPart = '+'+ b +'x';
document.write(secondPart);

var c = Number(prompt('enter c'));
var thirdPart = '+'+ c +'=0';
document.write(thirdPart);


 function equationDescr(a,b,c) {
var d, x1, x2, result;
d=b*b-4*a*c;

if (a==0) {
 result='<br>answer: a can not=0';  
}
else {
if (d>0) {
x1=(-b+Math.sqrt(d))/(2*a);
x2=(-b-Math.sqrt(d))/(2*a);
result='<br>answer: x1='+x1+', x2='+x2;
}
else if (d==0) {
x1= -b/(2*a);
result="x="+x1;
}
else if(d<0) {
result='<br>no result';
}
}
return result;
}

document.write(equationDescr(a,b,c));







