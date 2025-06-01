import { assertEquals, assertThrows } from "@std/assert";
import Calculate from "./main.ts";

Deno.test("Calculate.sum()", async (t) => {
  await t.step("should return 0 for an empty array", () => {
    assertEquals(Calculate.sum([]), 0);
  });

  await t.step("should sum positive numbers correctly", () => {
    assertEquals(Calculate.sum([1, 2, 3]), 6);
  });

  await t.step("should sum negative numbers correctly", () => {
    assertEquals(Calculate.sum([-1, -2, -3]), -6);
  });

  await t.step("should sum mixed positive and negative numbers", () => {
    assertEquals(Calculate.sum([-1, 2, -3, 4]), 2);
  });

  await t.step("should return the number itself for a single element array", () => {
    assertEquals(Calculate.sum([5]), 5);
  });
});

Deno.test("Calculate.sort()", async (t) => {
  await t.step("should return an empty array for an empty input array", () => {
    assertEquals(Calculate.sort([]), []);
  });

  await t.step("should sort an array of positive numbers", () => {
    assertEquals(Calculate.sort([3, 1, 2]), [1, 2, 3]);
  });

  await t.step("should sort an array of negative numbers", () => {
    assertEquals(Calculate.sort([-1, -3, -2]), [-3, -2, -1]);
  });

  await t.step("should sort an array of mixed numbers", () => {
    assertEquals(Calculate.sort([3, -1, 0, 2, -5]), [-5, -1, 0, 2, 3]);
  });

  await t.step("should handle an already sorted array", () => {
    assertEquals(Calculate.sort([1, 2, 3, 4]), [1, 2, 3, 4]);
  });

  await t.step("should handle an array with duplicate numbers", () => {
    assertEquals(Calculate.sort([3, 1, 2, 1, 3]), [1, 1, 2, 3, 3]);
  });
});

Deno.test("Calculate.mean()", async (t) => {
  await t.step("should calculate the mean of positive numbers", () => {
    assertEquals(Calculate.mean([1, 2, 3, 4, 5]), 3);
  });

  await t.step("should calculate the mean of negative numbers", () => {
    assertEquals(Calculate.mean([-1, -2, -3, -4, -5]), -3);
  });

  await t.step("should calculate the mean of mixed numbers", () => {
    assertEquals(Calculate.mean([1, -2, 3, -4, 5]), 0.6);
  });

  await t.step("should return NaN for an empty array", () => {
    assertEquals(Calculate.mean([]), NaN);
  });

  await t.step("should return the number itself for a single element array", () => {
    assertEquals(Calculate.mean([7]), 7);
  });
});

Deno.test("Calculate.median()", async (t) => {
  await t.step("should find the median of an odd-length array", () => {
    assertEquals(Calculate.median([1, 3, 2, 5, 4]), 3);
  });

  await t.step("should find the median of an even-length array", () => {
    assertEquals(Calculate.median([1, 4, 2, 3]), 2.5);
  });

  await t.step("should find the median with negative numbers", () => {
    assertEquals(Calculate.median([-1, -5, 0, -2]), -1.5);
  });

  await t.step("should find the median with duplicate numbers", () => {
    assertEquals(Calculate.median([1, 2, 2, 3]), 2);
  });

  await t.step("should return NaN for an empty array", () => {
    assertEquals(Calculate.median([]), NaN);
  });

  await t.step("should return the number itself for a single element array", () => {
    assertEquals(Calculate.median([7]), 7);
  });
});

Deno.test("Calculate.mode()", async (t) => {
  await t.step("should find a single mode", () => {
    assertEquals(Calculate.mode([1, 2, 2, 3, 4]), 2);
  });

  await t.step("should find multiple modes and return them as a sorted array", () => {
    const result = Calculate.mode([1, 2, 2, 3, 3, 4]);
    if (Array.isArray(result)) {
      assertEquals(result.sort((a, b) => a - b), [2, 3]);
    } else {
      throw new Error("Expected mode to return an array for multiple modes.");
    }
  });

  await t.step("should return all numbers if all are unique (multiple modes)", () => {
    const result = Calculate.mode([1, 2, 3, 4]);
     if (Array.isArray(result)) {
      assertEquals(result.sort((a, b) => a - b), [1, 2, 3, 4]);
    } else {
      throw new Error("Expected mode to return an array for unique numbers.");
    }
  });

  await t.step("should return an empty array for an empty input array", () => {
    assertEquals(Calculate.mode([]), []);
  });

  await t.step("should find mode with negative numbers", () => {
    assertEquals(Calculate.mode([-1, -2, -2, -3]), -2);
  });
});
