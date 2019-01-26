// Different ways to write loop in JS
const courses = ['Javascript', 'Java', 'Python', 'Go', 'PHP', 'Dart', 'C++'];
// Find Java
function findJava(find) {
  for (let i = 0; i < find.length; i++) {
    if (find[i] === 'Java') {
      console.log(`We found ${find[i]} in the index ${i}`);
      break;
    }
  }
}
findJava(courses);

// find python
const findPython = courses => {
  courses.forEach(course => {
    if (course === 'Python') {
      console.log(`We found ${course}`);
    }
  });
};
findPython(courses);

const findCpp = course => {
  for (let item of course) {
    if (item === 'C++') {
      console.log('We found it and its', item);
    }
  }
};
findCpp(courses);
