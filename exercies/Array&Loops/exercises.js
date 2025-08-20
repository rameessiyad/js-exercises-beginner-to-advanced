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
const arraySwap = (array) => {
  const arr = [...array];

  const lastIndex = arr.length - 1;
  [arr[0], arr[lastIndex]] = [arr[lastIndex], arr[0]];
  console.log(arr);
};

// arraySwap(["hi", "hello", "good"]);

//q-4 create a loop that counts up from 0 to 10, but counts up by 2 (0,2,4,...,8,10);
for (let i = 0; i <= 10;) {
  console.log(i);
  i= i+2
}
