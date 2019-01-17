// const go = (direction, speed) => {
   
//     console.log(`the car is moving ${direction}, at ${speed} mph`)
//     if (speed > 75){
//         console.log("SLOW DOWN!")
//     }
// }
// go('sideways', 200)

// const foods = ["pizza", "spaghetti", "burger", "hotdog", "corn dog", "taco"]

// for (var i = 0; i < foods.length; i++) {
//     let currentFood = foods[i];

//     if (currentFood === "hotdog") {
//         console.log("hotdog");
//     } else {
//         console.log("not hotdog")
//     }
// }

// const stuff = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];
// let newStuff = [];
// for (let index = 0; index < index.length; index++) {
//     const element = stuff[index];
//     console.log()
    
// }

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(`height: ${wardrobe.height},
//  manufacturer: ${wardrobe.manufacturer}, 
//  contents: ${wardrobe.contents}, 
//  depth: ${wardrobe.depth}, 
//  width: ${wardrobe.width} `)

//  const kaelin = {
//      name: "kaelin",
//      hairColor: "red",
//      height: "short",
//      eyeColor: "green",
//      birthDay: 0428,
//  }

 
//  const erin = {
//     name: "erin",
//     hairColor: "brown",
//     height: "very short",
//     eyeColor: "brown",
//     birthDay: 0405,
// }


// const hannah = {
//     name: "hannah",
//     hairColor: "brown",
//     height: "super short",
//     eyeColor: "blue",
//     birthDay: 0128,
// }


// const hector = {
//     name: "hector gonzzalez the 3rd king of bohemia and protector of mankind",
//     hairColor: "black",
//     height: "the big boi",
//     eyeColor: "yellow",
//     birthDay: 0101,
// }

// const familyMembers = [kaelin, erin, hannah, hector];

// console.log(familyMembers)

// const kennel = {
//     name: "Nashville North Kennels",
//     address: "100 Demonbreun Road",
//     manager: "Harper Frankstone",
//     capacity: 50,
//     currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
//  }

//  console.log(kennel.currentAnimals)

//  const nashvilleSoftwareSchool = {
//     founded: 2012,
//     director: "John Wark",
//     instructors: {
//         fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
//         partTime: ["Zoe", "Nathan"]
//     },
//     address: "500 Interstate Blvd. S"
// }

// console.log(nashvilleSoftwareSchool.instructors.partTime)
// console.log(nashvilleSoftwareSchool.instructors.fullTime)

// const age = 30
// const timeSpan = 25
// const futureAge = age + timeSpan
// const name = "Biff"
// const generationStereotype = "millenial"
// const dadJoke = "milleni-old"

// console.log(` "hi my name is ${name}, and im ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} 
// ill be ${futureAge}. I guess that means ill be ${dadJoke}"`)

// let hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//         copies_sold: 14000000,
//         formats: ["radio", "TV", "film", "graphic novel"],
//         ultimate_answer: {
//             meaning_of_life: 42
//         }
//     }
// };
// let meaning = "meaning_of_life"

// let meaning_of_life = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life[meaning]

// console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life)

// console.log(meaning)

// 1/16/19
 function addEmUp(first, second ) { console.log(first + second)}
  
 function subtractEm(first, second){ console.log(first - second)}

 addEmUp(2, 4)
 addEmUp(43, 56)
 subtractEm(34, 9)

 const calculate = (first, second, fn) => {
    fn(first, second)
 }
 calculate(512, 1024, addEmUp)

 calculate(512, 1024, subtractEm)