  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property

let totalYrsExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalYrsExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <-- this is what we want

let experienceByProffession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if(!acc[key]) {
    acc[key] = curr.yrsExperience
  } else {
    acc[key] += curr.yrsExperience
  }
  return acc;
}, {});

console.log(experienceByProffession);

// Grouping by a property, profession with names
// { 
//   Developer: ['Andrew', 'Ariel'],
//   Designer: ['Michael', 'Kelly'],
//   Manager: ['Mark']
// } <-- this is what we want

let nameByProfession = teamMembers.reduce((acc, curr) => {

  let key = curr.profession;

  if(!acc[key]) {
    acc[key] = [];
    acc[key].push(curr.name)
  } else {
    acc[key].push(curr.name)
  }
  return acc;

}, {});

console.log(nameByProfession);

const skillByProfession = teamMembers.filter(skill => skill.profession === 'Developer');
console.log(skillByProfession);

const experiencedDev = skillByProfession.filter(experience => experience.yrsExperience >=7);
console.log(experiencedDev);

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];



const biggest = students.reduce((prev, curr) => {
  
 

  prev = prev.max > curr.results.english ? prev : {name: curr.name, max: curr.results.english};
   
  return prev;
  
  //  if (prev.max > curr.results.english) {
  //     // Keep the previous value
  //     return prev;
  // } else {
  //     // Return a new object with the current student's name and max score
  //     return { name: curr.name, max: curr.results.english };
  // }
  
}, {});

console.log(biggest);
