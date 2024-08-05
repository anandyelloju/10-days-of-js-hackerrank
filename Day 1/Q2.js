// Functions

function factorial(n) {
    return (n <= 1) ? 1 : n * factorial(n-1);
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}