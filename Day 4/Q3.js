// Classes

class Polygon {
    constructor(sides){
        this.sides = sides;
    }
    
    perimeter(){
        return this.sides.reduce((side, sideSum) => sideSum += side, 0);
    }
}