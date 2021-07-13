let getMaxSumSubarray = (arrayParam, subArraySize) => {
	let actualSum = 0;
  let maxSum = 0;
  let maxSumInitIndex = 0;

	for(let i = 0; i < arrayParam.length; i++){
  	actualSum = actualSum + arrayParam[i];
    if(i < subArraySize) {
    	maxSum = actualSum;
    } else {
    	actualSum = actualSum - arrayParam[i - subArraySize];
      if(actualSum > maxSum){
      	maxSum = actualSum;
        maxSumInitIndex = i - subArraySize + 1;
      }
    }
  }
  return arrayParam.slice(maxSumInitIndex, subArraySize + maxSumInitIndex);
  //return maxSum;
}

console.log("The maximun for this array is:");
console.log(getMaxSumSubarray([1,2,3,4], 2));

console.log("The maximun for this array is:");
console.log(getMaxSumSubarray([6,2,3,4,1,7,13], 3));