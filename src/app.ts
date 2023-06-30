// “In a language of your choice, using all best practice principles you’re aware of,
// could you please provide code that reads a list of 10 numbers ranging between 1 to 100.
// Assuming there are 4 duplicates in the list of numbers, the output should remove the
// duplicates and sort the remaining numbers in descending order. Please state any assumptions you’ve made.
//
// Please upload to a public Github repository and share the link.”
//
// Your solution to the above coding challenge will be scored using the following criteria as well as some others:
// - Reusable function
// - Boundaries assumptions match code
// - GitHub
// - Consistent naming convention
// - Comments

// Testing Assumptions -
// ... the list will have no more than 10 values
// ... the list will have no less than 10 values
// ... the list should only contain numbers


import {numberSortingService} from "./services/number-sorter.service";

console.log("hello world");
// testing with invalid input
const sorterService = new numberSortingService([10, 8, 7, 7, 5, 2, 3, 1], 1, 100);
console.log(sorterService.sortValues());
