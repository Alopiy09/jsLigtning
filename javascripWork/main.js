for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 2 === 0) {
        console.log(currentNumber) // Only 2, 4, 6 will appear
    }
}

for (var i=1; i < 101; i++){
    if (i % 7 == 0 && i % 5 == 0) console.log("ChickenMonkey");
    else if (i % 7 == 0) console.log("Monkey");
    else if (i % 5 == 0) console.log("Chicken");
    else console.log(i);
 }


 let bandNumber = 1

const takeNumber = function (name){
     let bandList = `${bandNumber}.${name}`
    bandNumber++
    return bandList
     }  


const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const boom = takeNumber("BoomPow")
console.log(boom)


const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}


const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];


const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < uncookedFood.length; i++) {
    const currentObject = uncookedFood[i];
    if (currentObject.cooked === false ){
        grill(currentObject)
    }
   
}
console.log(cookedFood)

    