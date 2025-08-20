//q-1 Create an array of numbers: const nums = [10,20,30]; Modify the last value in this array to 99
const nums = [10, 20, 30];
nums[nums.length - 1] = 99;
// console.log(nums);

//q-2 create a func getLastValue(array) that takes an array and return its last value;
const getLastValue = (array) => {
  console.log(array[array.length - 1]);
};

// getLastValue(["hi", "hello", "good"]);

//q-3 create a func arraySwap(array) that takes an array and returns an array where the first and last values are swapped;
//example -> arraySwap([1,20,22,24,5]) => [5,20,22,24,1]
