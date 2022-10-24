/*Return an array consisting of the largest number from each provided sub-array.
 For simplicity, the provided array will contain exactly 4 sub-arrays.
*/


function largestNums(arr){
  let result = [];
  let max;
  for(let i=0; i<arr.length; i++){
    max = arr[i][0];
    for(let j = 1; j<arr[i].length; j++){
      if(arr[i][j] > max)
        max = arr[i][j];
    }
    result[i] =max;
  }
  return result;
}
console.log(largestNums([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
