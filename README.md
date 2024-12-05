# Express.js Route Handler Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input. Specifically, this example shows a route that retrieves a user by ID, but fails to handle cases where the ID is not a number or is otherwise invalid. 

## Bug

The `bug.js` file contains the flawed code.  The route handler attempts to parse the `userId` as an integer using `parseInt`, but doesn't handle the case where `parseInt` returns `NaN` (Not a Number). This results in an error if a non-numeric ID is passed to the route.

## Solution

The `bugSolution.js` file provides a corrected version.  It includes error handling that checks if `parseInt(userId)` is `NaN`. If it is, it sends a 400 Bad Request response. Otherwise, it continues as before.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install express`.
4. Run `node bug.js`.
5. Send a GET request to `/users/abc` (or any non-numeric ID).

You'll see an error.  Then run `node bugSolution.js` and repeat step 5. You'll see a 400 Bad Request response.