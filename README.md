# Calculate Class Documentation

This document provides an overview of the `Calculate` class and its methods.

## Class: `Calculate`

The `Calculate` class provides a set of static methods for performing common mathematical calculations on an array of numbers.

### Methods

#### `sum(nArray: number[]): number`

Calculates the sum of all numbers in an array.

-   **Parameters:**
    -   `nArray`: An array of numbers.
-   **Returns:**
    -   The sum of the numbers in the array.
    -   Returns `0` if the array is empty.
-   **Example:**

    ```typescript
    Calculate.sum([1, 2, 3); // Returns 6
    Calculate.sum([-1, -2, -3]); // Returns -6
    Calculate.sum([]); // Returns 0