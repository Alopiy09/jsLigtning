
const h1 = ( ...props) => {
    return `<h1 class="${props[2]}, ${props[1]}">${props[0]}<h1>`
}
const section = ( ...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}
const aside = ( ...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
}

// const h1 = element("h1", "Generic Component Maker", "xx-large orange")

// const element = (props) => {
//     return `<${props[0]} class="${props[1]}">${props[2]}<${props[0]}>` 
// }




// const h1 = (style, ...props) => {
//     return `<h1 class="${props[0]}">${props[1]}</h1>`
// }

// const section = (style, ...props) => {
//     return `<section class="${props[0]}">${props[1]}</h1>`
// }


// const aside = (style, ...props) => {
//     return `<aside class="${props[0]}">${props[1]}</h1>`
// }

 const makeStudent = (name, clazz, info, grade) => `
    <div id="student">
        ${h1(name, "xx-large " + grade)}
        ${section(clazz, "section--padded")}
        ${aside(info, "pushRight")}
        
    </div>
`
// students.forEach(currentStudent => {
//     const studentHTMLRepresentation = student(
//         currentStudent.name,
//         currentStudent.clazz,
//         currentStudent.info)
//     document.querySelector("#container").innerHTML += studentHTMLRepresentation
// })


for (student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = makeStudent(student.name, student.class, student.info, "passing")
    } else {
        studentComponent = makeStudent(student.name, student.class, student.info, "failing")
    }
    document.querySelector("#container").innerHTML += studentComponent
}
