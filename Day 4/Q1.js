// Create a Rectangle Object

function Rectangle(a, b) {
    let rectangleObj = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
    return rectangleObj;
}