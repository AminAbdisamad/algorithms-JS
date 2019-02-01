// Create a function that returns a reverse of a string
// for example, 'I am hassan ' => 'nassah ma i'

// Step1. take string split into array
// Step2. Loop though string by reversing
// step3. join the into one string

// Solution 1
// Time Complexity = O(n)
// Space Complexity = O(n)
function reverse(str) {
  let input = str.split('');
  let reverse = [];
  //   console.log(input);
  for (let item = input.length - 1; item >= 0; item--) {
    reverse.push([input[item]]);
  }
  return reverse.join('');
}
// console.log(reverse('Hi my name is amin'));

// Solution 2
// Time Complexity = O(1)
// Space Complexity = O(1)
const reverseItems = item => [...item].reverse().join('');

console.log(reverseItems('Hi my name is amin'));
