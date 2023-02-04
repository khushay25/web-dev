//q1-> Triangle pattern
var str1="";
let space=3;
let star1=1;

for(let row1=1;row1<=4;row1++){
    while(space>0){
        str1+=" ";
        space--;
    }
    while(star1<=row1){
        str1+="* ";
        star1++;
    }
    str1+="\n";
    space=3-row1;
    star1=1;
}
console.log(str1);

//q2-> Rectangle pattern
var str2="";

for(let row2=1;row2<=4;row2++){
    for(let star2=1;star2<=6;star2++){
        str2+="*";
    }
    str2+="\n";
}
console.log(str2); 