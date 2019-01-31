/* Given two arrays create a function that let's a user to know (true/false) whether 2 arrays contain common items.

For example 
array1 = ['a','b']
array2 = ['a','c']
Should return true

array1 = ['a','b']
array2 = ['f','c']
should return false

*/
// Lets try naive brute force approach - O(n*b) not the best approach
// if the size of two nested loops would have same it would be n^2
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
console.log(findCommon(array1, array2));

// Better Way using - O(a+b)
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

console.log(containItems(array1, array2));
