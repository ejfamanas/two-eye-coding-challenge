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

// using OOP to demonstrate:
// ... encapsulation
// ... re-usability (SOLID, DRY)

// using typescript to enforce:
// ... clean code
// ... styling
// ... compile-time error handling
// ... predictable inputs



export class numberSortingService {
    // using generics to enforce strong / static typing and input predictability
    private numberInput: Array<number>;
    // using input to encapsulate variable on class instantiation
    constructor(input: Array<number>, min: number, max: number) {
        // we can handle the testing of the input within the constructor
        if (this.testLength(input) || this.testValues(input) || this.testRange(input, min, max)) {
            throw new Error("invalid input, please check the input");
        }
        this.numberInput = input;
    }
    // helper function to test array length
    private testLength(input: Array<number>): boolean {
        // testing assumption that the array will always have 10 values
        return input.length > 10 || input.length < 10;
    }
    private testValues(input: Array<number>): boolean {
        // testing assumption that the array is not filled with null or undefined values
        // this is a language characteristic of typescript and we should check it
        return input.some((x: number) => x === null || undefined)
    }
    private testRange(input: Array<number>, min: number, max: number): boolean {
        const minVal = Math.min(...input);
        const maxVal = Math.max(...input);
        return minVal >= min && maxVal <= max;
    }
    // could use local variable, but i like to keep pure functions for testing
    private removeDuplicates(input: Array<number>): Array<number> {
        // here we store the result in a new value
        const result = [];
        for (let i = 0; i < input.length; i++) {
            // if the number is not in the current array, add
            // if find returns true, do not add
            // NOTE
            if (!result.find((x) => x === input[i])) {
                result.push(input[i]);
            }
        }
        return result;
    }
    public sortValues(): Array<number> {
        // remove duplicates
        const numberInput = this.removeDuplicates(this.numberInput);
        // using the sort function to run a quick sort
        // the compare function will test the previous against the current value and swap them around

        return numberInput.sort((x:number, y: number) => x - y);
    }
}

// this implementation uses typescripts embedded generics to force some of the typing assumptions
