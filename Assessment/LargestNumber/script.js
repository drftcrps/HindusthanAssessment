function findLargestNumber(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    return Math.max(...nums);
}
console.log(findLargestNumber([3, 1, 8, 4, 5]));
