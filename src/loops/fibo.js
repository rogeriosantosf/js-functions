export function fibo(position) {
    let a = 0;
    let b = 1;
    let c;

    for (let x = 2; x <= position; x++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}
