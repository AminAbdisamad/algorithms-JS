// Merge and Sort Arrays
// mergeSortedArrays = ([1,4,5,7],[45,67,78,89])
// result should be  [1,4,5,7,45,67,78,89]
function mergeTwoArraysAndSort(arr1, arr2) {
  const mergedArrays = [];
  //   if (arr1.length === 0) {
  //     return arr2;
  //   }
  //   if (arr2.length === 0) {
  //     return arr1;
  //   }
  for (let item = 0; item < arr1.length; item++) {
    mergedArrays.push(arr1[item]);
  }
  for (let item = 0; item < arr2.length; item++) {
    mergedArrays.push(arr2[item]);
  }
  //   mergeTwoArraysAndSort.sort();

  console.log(mergedArrays);
}
// mergeTwoArraysAndSort([1, 4, 5, 7], []);
mergeTwoArraysAndSort([], [45, 67, 78, 89, 9]);
// mergeTwoArraysAndSort([1, 4, 5, 7], [45, 67, 78, 89, 9]);
