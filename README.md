# Calculate TypeScript Class

A utility class in TypeScript for performing common mathematical and statistical operations on arrays of numbers. All methods are static and can be called directly on the class.

## Features

- Calculate the sum of numbers.
- Sort an array of numbers in ascending order.
- Calculate the mean (average) of numbers.
- Calculate the median of numbers.
- Find the mode(s) of numbers.

## Installation / Usage

Since this is a single TypeScript class, you would typically include it in your TypeScript project.

1.  **Save the code:** Save the class definition into a file named `Calculate.ts` (or your preferred name) within your project's source directory.
2.  **Import the class:** In the TypeScript file where you want to use the class, import it:

    ```typescript
    import Calculate from './Calculate'; // Adjust the path as necessary
    ```

3.  **Use the methods:** Call the static methods directly on the `Calculate` class:

    ```typescript
    const numbers = [1, 5, 2, 8, 2, 5, 5, 9];

    console.log("Original Array:", numbers);
    console.log("Sum:", Calculate.sum(numbers)); // Output: 37
    console.log("Sorted Array:", Calculate.sort(numbers)); // Output: [1, 2, 2, 5, 5, 5, 8, 9]
    console.log("Mean:", Calculate.mean(numbers)); // Output: 4.625
    console.log("Median:", Calculate.median(numbers)); // Output: 5
    console.log("Mode:", Calculate.mode(numbers)); // Output: 5

    const emptyArray: number[] = [];
    console.log("Sum of empty array:", Calculate.sum(emptyArray)); // Output: 0
    console.log("Mean of empty array:", Calculate.mean(emptyArray)); // Output: NaN

    const bimodalArray = [1, 2, 2, 3, 3, 4];
    console.log("Mode of bimodal array:", Calculate.mode(bimodalArray)); // Output: [2, 3]
    ```

## API Reference

### `Calculate.sum(nArray: number[]): number`

Calculates the sum of all numbers in the input array.

-   **Parameters:**
    -   `nArray: number[]`: An array of numbers.
-   **Returns:** `number`
    -   The sum of the numbers in the array.
    -   Returns `0` if the input array is empty.

### `Calculate.sort(nArray: number[]): number[]`

Sorts the input array of numbers in ascending order. This method uses `toSorted()`, which returns a new sorted array without modifying the original array.

-   **Parameters:**
    -   `nArray: number[]`: An array of numbers.
-   **Returns:** `number[]`
    -   A new array with the numbers sorted in ascending order.

### `Calculate.mean(nArray: number[]): number`

Calculates the arithmetic mean (average) of the numbers in the input array.

-   **Parameters:**
    -   `nArray: number[]`: An array of numbers.
-   **Returns:** `number`
    -   The mean of the numbers in the array.
    -   Returns `NaN` (Not a Number) if the input array is empty.

### `Calculate.median(nArray: number[]): number`

Calculates the median (the middle value) of the numbers in the input array.

-   **Parameters:**
    -   `nArray: number[]`: An array of numbers.
-   **Returns:** `number`
    -   The median value.
    -   If the array has an even number of elements, it returns the average of the two middle elements.
    -   If the array has an odd number of elements, it returns the single middle element.
    -   Returns `NaN` if the array is empty (as `sort` on an empty array is empty, and accessing `sorted[Math.floor(sorted.length / 2)]` would be `sorted[-1]` or `sorted[0]`

### `Calculate.mode(nArray: number[]): number | number[]`

Finds the mode(s) (the value or values that appear most frequently) in the input array.

-   **Parameters:**
    -   `nArray: number[]`: An array of numbers.
-   **Returns:** `number | number[]`
    -   If there is a single mode, it returns that number.
    -   If there are multiple modes (i.e., several numbers have the same highest frequency), it returns an array of these numbers.
    -   If the input array is empty, it will likely return `[]` as `Object.values(kv)` on an empty `kv` would be `[]`, `Math.max(...[])` is `-Infinity`, and the filter would result in an empty array.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements or find any bugs.

## License

This code is provided as is. You are free to use, modify, and distribute it.
