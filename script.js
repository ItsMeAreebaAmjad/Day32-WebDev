document.addEventListener('DOMContentLoaded', function() {

const box=document.getElementById("box");
const message=document.getElementById("message");
const Btn=document.getElementById("Btn");

Btn.onclick=function(){

    age=box.value;
    age=Number(age);

    if(age>=18){
        message.textContent="You are eligible to vote";
    }

    if(age>=100){
        message.textContent="You are too OLD to vote";
    }

    if(age<18){
        message.textContent="You are not eligible to vote ";
    }

    if(age<0){
        message.textContent="Age Cannot be in Negative";
    }

    if(age==0)
    {
        message.textContent="Your are just born";
    }

}

});