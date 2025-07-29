let ad1 = "Crazy";
let ad2 = "Amazing";
let ad3 = "Fire";

let sh1 = "Engine";
let sh2 = "Foods";
let sh3 = "Garments";

let an1 = "Limited";
let an2 = "Bros";
let an3 = "Hub";

function name_generator(c)
{
    let rand = Math.random();
    
    switch(c) {
        case "Foods":
            if (rand < 0.3) {
                return ad1.concat(sh2, an1);
            } else if (rand < 0.6) {
                return ad2.concat(sh2, an2);
            } else {
                return ad3.concat(sh2, an3);
            }

        case "Engine":
            if (rand < 0.3) {
                return ad1.concat(sh1, an1);
            } else if (rand < 0.6) {
                return ad2.concat(sh1, an2);
            } else {
                return ad3.concat(sh1, an3);
            }

        default:
            if (rand < 0.3) {
                return ad1.concat(sh3, an1);
            } else if (rand < 0.6) {
                return ad2.concat(sh3, an2);
            } else {
                return ad3.concat(sh3, an3);
            }
    }
    
}

let c = prompt("Enter your shop type (Engine, Foods, Garments): ")

let b = name_generator(c);

console.log(b);















/* 
Adjectives :
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
garments

Another Word:
Limited
Bros
Hub
*/
