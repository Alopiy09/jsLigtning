// const rubberDucky = {
//     colors: ["green", "orange", "white", "black"],
//     size: "s",
//     noise: "high squeak",
//     floats: true,
//     squeak: function () {
//         alert(this.noise)
//     }
// }


// const myPet = {
//     name: "Hector",
//     species:"cat",
//     nicknames: ["Hector Gonzalez", "Hector Mendoza", "cat", "bastard"],
//     age: 7,
// }

// console.log(myPet.age)



// const restaurant = {
//     name: "Bob's Burgers",
//     orders:[],
//     placeOrder: function (food) {
//         this.orders.push(food)
//     }
// }

// const chickenComboMeal = {
//     sandwichType: "chicken",
//     fries: true,
//     drinkSize:"S",

// }

// const steakComboMeal = {
//     sandwichType:"Steak",
//     fries: false,
//     drinkSize: "L",

// }

// const porkComboMeal = {
//     sandwichType:"Pulled pork",
//     fries: true,
//     drinkSize:"M"

// }

// // Place an order
// restaurant.placeOrder(porkComboMeal)

// // Invoke the function to return the list of all orders

// // Output all orders to the console using console.table()

// console.table(restaurant.orders)


const district = {
    dist: "5th Tennessee District"
}

const platform = {
    taxes: "low",
    jobs: "make em",
    infrastructure: "plz pave 440",
    healthCare: "yes i care about health",
    crimeStance: "i commit crimes",
}

var str = "Donate to my Campaign";
var result = str.link("https://www.w3schools.com");

const events = [
    {
        date: "03-07-30000",
        location: "you know",
        time: "2am",
        description: "local mayor does kickflip"

    },

    {
        date: "05-99-????",
        location: "the eternal void",
        time: "does not exist",
        description: "existential crisis in slomo"
    },

    {
        date: "REDACTED-34-2",
        location: "REDACTED island south pacific",
        time: "REDACTED pm",
        description: "scp 00-REDACTED has been spotted the team known as alpha recall led by our sleeper cell agent congresswoman Elizabeth sanger ,real name is not of public record, to combat any anomalies and retrieve scp 00-redacted"
    },
]

const volunteers = [
    {
        name: "Mr.frog",
        address: "moon facility X0-153",
        email: "NA",
        phoneNumber: "615-443-7654",
        availability: "On stand by for reclaim",
        task: "frogman"
    },

    {
        name: "The placeholder",
        address: "sub atlntic facility E4-6347",
        email: "NA",
        phoneNumber: "443-7563-2341",
        availability: "already on job",
        task: "lookout"
    },

    {
        name: "BEES",
        address: "worldwide",
        email: "BeesBuzzBuzz@iamabee.com",
        phoneNumber: "bee-bee-buzz",
        availability: "depends on the weather",
        task: "pollination"
    },
]

const bio = {
    biography: "Ms.slanger is an scp operative of the alpha recall team she started training on REDACTED and finished on REDACTED. clearance level REDACTED"
}

const gallery = {
    headshot:"s",
    familyPhoto: "b",
    constituants:"s"
}

const missionStatement = {
    statement: "I Elizabeth Sanger am an scp operative of REDACTED years. I have personally overseen REDACTED missions, and am the current squad leader of alpha recall team"
}

const voteUrl = {
    voterUrl: "www.vote4me.gov",
}

function changeValue(){
   gallery.headshot = "asff"
}
changeValue()

console.log(gallery)

function changeName() {
    volunteers.push()
}