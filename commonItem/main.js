/* Given two arrays create a function that let's a user to know (true/false) whether 2 arrays contain common items.

For example 
array1 = ['a','b']
array2 = ['a','c']
Should return true

array1 = ['a','b']
array2 = ['f','c']
should return false

*/
// Lets try naive brute force approach
// Time Complexity = O(a*b)
// Space Complexity = O(1)
// This solution takes more time and memory but less space
function findCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

array1 = ['a', 'b', 'f', 'd', '12'];
array2 = ['g', 'c', 'h', 'd', '3', '1'];
findCommon(array1, array2);

// Better Way using Hash Table
// Time Complexity = O(a+b)
// Space Complexity = O(a)
// This solution takes less time and memory but more space
const containItems = (item1, item2 = 'none') => {
  // loop through first array and create object where properties == array items
  const map = {};
  for (let i = 0; i < item1.length; i++) {
    if (!map[item1[i]]) {
      const item = item1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if the properties in the object exists in the array
  for (let j = 0; j < item2.length; j++) {
    if (map[item2[j]]) {
      return true;
    }
  }
  return false;
};

const containItemsInModern = (arr1, arr2) =>
  arr1.some(item => arr2.includes(item));
console.log(containItemsInModern(array1, array2));
