const passwordBox=document.getElementById("password");
const length=12;
//different char

const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%^&89()_+{}-/<>=[]|"

const allchars=upperCase+lowerCase+number+symbol;
//function for create random password

function createPassword(){
let password="";
password+= upperCase[Math.floor(Math.random()*upperCase.length)];
password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
password+= number[Math.floor(Math.random()*number.length)];
password+= symbol[Math.floor(Math.random()*symbol.length)];
//only 4 char added but we need 12 char so after add const allchars=upperCase+lowerCase+number+symbol;
 
while(length>password.length){
    password+= allchars [Math.floor(Math.random()*allchars .length)];

}

passwordBox.value= password;
}



function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    if(passwordBox.value==""){
    alert("Click generate");
    }
  
}
const button=document.getElementById("button");
