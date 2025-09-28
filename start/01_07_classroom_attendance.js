// Write your code here


function getStudents(classroom) {
let {hasAssistant, classList} = classroom;
let teacher, assistant, students;
if (hasAssistant) {
    [teacher, assistant, ...students] = classList;
} else {
    [teacher, ...students] = classList;
}
return students;
}

console.log(getStudents({
  hasAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
}));