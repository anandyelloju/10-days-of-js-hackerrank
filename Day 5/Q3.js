// Arrow Function

function modifyArray(nums) {
  return nums.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
}
