// SICP JS 1.1.6

function plus(a, b) { return a + b; }

function minus(a, b) { return a - b; }

function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}

a_plus_abs_b(5, -4);

/*
evaluates if b is larger than or equal to 0, if this condiition is met it returns plus(a, b)
else, it returns minus(a, b)

in either case, it will be returning the same value because if b is a negative number, subtracting a negative number is the same as adding a number, therefore:
a -(-b)
= a + b
*/