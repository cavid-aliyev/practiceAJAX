'use strict';

const inputAZN = document.querySelector('#azn');
const inputUSD = document.querySelector('#usd');

inputAZN.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', ()=>{
        if(request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response); //parse to normal object
            inputUSD.value = (+inputAZN.value / data.current.usd).toFixed(2); //convert 
        }else{
            inputUSD.value = "Something went wrong. Please try again";
        }
    });

});