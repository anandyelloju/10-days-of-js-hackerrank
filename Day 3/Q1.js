// Arrays

function getSecondLargest(nums) {
    // Complete the function
    return [...new Set(nums)].sort((a, b) => b - a)[1];
}