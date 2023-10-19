// 'Multiplication' Function
function multiplication(num1, num2) {
    // Check if both inputs are numbers
    console.log("Checking if both inputs are numbers...");
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Both inputs must be numbers. Returning an error.');
        throw new Error('Both inputs must be numbers');
    }
    // Return the product of num1 and num2
    const result = num1 * num2;
    console.log(`The result of multiplication is: ${result}`);
    return result;
}

// 'concatOdds' Function
function concatOdds(arr1, arr2) {
    // Check if both inputs are arrays
    console.log("Checking if both inputs are arrays...");
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        console.log('Both inputs must be arrays. Returning an error.');
        throw new Error('Both inputs must be arrays');
    }

    // Concatenate the two arrays and filter for odd numbers
    console.log("Concatenating arrays and filtering for odd numbers...");
    const oddNumbers = arr1.concat(arr2).filter(num => typeof num === 'number' && num % 2 !== 0);

    // Sort the odd numbers in ascending order
    console.log("Sorting odd numbers in ascending order...");
    const sortedOddNumbers = oddNumbers.sort((a, b) => a - b);

    console.log('The sorted odd numbers are:', sortedOddNumbers);
    return sortedOddNumbers;
}

// Shopping Cart Checkout Feature
const shoppingCart = {
    items: [],
    guestCheckout: function () {
        // Check if the cart is empty
        console.log("Checking if the cart is empty...");
        if (this.items.length === 0) {
            console.log('Your cart is empty. Add items to your cart before checking out.');
            return 'Your cart is empty. Add items to your cart before checking out.';
        }
        // Return a message for guest checkout
        console.log('Guest checkout. Do you want to create an account or log in?');
        return 'Guest checkout. Do you want to create an account or log in?';
    },
    loggedInCheckout: function () {
        // Check if the cart is empty
        console.log("Checking if the cart is empty...");
        if (this.items.length === 0) {
            console.log('Your cart is empty. Add items to your cart before checking out.');
            return 'Your cart is empty. Add items to your cart before checking out.';
        }
        // Return a message for logged-in user checkout
        console.log('Logged-in user checkout. Continue without creating an account.');
        return 'Logged-in user checkout. Continue without creating an account.';
    },
    proceedToCheckout: function (userType) {
        if (userType === 'guest') {
            // Proceed to guest checkout
            console.log('Proceeding to guest checkout...');
            return this.guestCheckout();
        } else if (userType === 'loggedIn') {
            // Proceed to logged-in user checkout
            console.log('Proceeding to logged-in user checkout...');
            return this.loggedInCheckout();
        } else {
            // Handle invalid user type
            console.log('Invalid user type. Returning an error message.');
            return 'Invalid user type';
        }
    },
};

// Example usage:
shoppingCart.items = ['item1', 'item2', 'item3'];
console.log(multiplication(3, 4)); // 12
console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])); // [-1, 1, 3, 9, 15]
console.log(shoppingCart.proceedToCheckout('guest')); // Guest checkout. Do you want to create an account or log in?
console.log(shoppingCart.proceedToCheckout('loggedIn')); // Logged-in user checkout. Continue without creating an account.
console.log(shoppingCart.proceedToCheckout('invalid')); // Invalid user type
