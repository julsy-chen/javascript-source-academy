function f(a, b, c) {
    return square(a) + square(b) + square(c) -
    square(a > b ? (b > c ? c : b) : (a > c ? c : a));
}
