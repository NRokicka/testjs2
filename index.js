// a=1 b=26 c=120
//a=0 b=0 c=120
//a=0 b=12 c=-12

var a = Number(prompt('enter "a"'));
var firstPart = a +'(x*x)';
document.write(firstPart);


var b = Number(prompt('enter "b"'));
var secondPart = '+'+ b +'x';
document.write(secondPart);

var c = Number(prompt('enter "c"'));
var thirdPart = '+'+ c +'=0';
document.write(thirdPart);


function equationDescr(a,b,c) {
    var d = b*b-4*a*c;
   
    if (a===0 && b>0){
        x= -c/b;
        result ='<br>x='+x;
    }
    else if(a===0 && b===0 && d<0){
        result='<br>no result';
    }
    else if (d>0) {
        x1=(-b+Math.sqrt(d))/(2*a);
        x2=(-b-Math.sqrt(d))/(2*a);
        result='<br>x1='+x1+', x2='+x2;
    }
    else if (d===0) {
        x= -b/(2*a);
        result="<br>x="+x;
    }
       return result;
    }

document.write(equationDescr(a,b,c));







