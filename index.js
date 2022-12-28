// Code your solutions in this file

/*for(let age=30;age<40;age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];
const newarr=[];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    newarr.push(gifts[i]);
    return newarr;
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);*/


function writeCards(names) {
    let messages = [];
    for(let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(number){
    while(number >= 0) {
        console.log(number); 
        number--;       
    }
}

  
