var removeElement = function(nums, val) {
  let valFreq = 0;
  let firstValIndex = 0;
  nums.sort();
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === val) {
      valFreq++;
      firstValIndex = i;
    }
  }
  nums.splice(firstValIndex, valFreq);
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([9, 9, 9, 9, 9, 9, 7, 7], 7));
//[3, 2, 2, 3];
//3
//nums.length===4
//[3, 2, 2, 3]
//if(nums[i]===val){
// nums.slice(i)
// }
//now the length is 3
//nums.length===3
//Olog(n)
