// SICP JS 1.1.6

function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

test(0, p());

/*
the test function first evaluates if x is 0, because it is 0, it returns zero, so there is no need to evaluate p()
*/ 