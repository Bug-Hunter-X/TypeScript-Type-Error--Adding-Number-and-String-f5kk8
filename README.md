# TypeScript Type Error: Adding Number and String

This repository demonstrates a common TypeScript type error that occurs when attempting to add a number and a string.  The TypeScript compiler correctly identifies the type mismatch, but the error message can sometimes be less than helpful.  The solution shows how to correctly type-check inputs and handle potential type mismatches.

## Bug
The `add` function is defined to accept two numbers and return their sum.  However, the code attempts to add a number (5) and a string ('10').  This results in a TypeScript compiler error.

## Solution
The solution adds input type validation to ensure that both arguments are numbers before performing the addition.  If either argument is not a number, a clear error message is displayed, and the function returns 0 (or an appropriate default value).