function Reactangle(length, width) {
    this.length = length;
    this.width = width;

    this.getArea = function () {
        return this.length * this.width;
    };
}

let reactangle1 = new Reactangle(8, 3);
console.log(`1. Rechteck: Länge = ${reactangle1.length}, Breite = ${reactangle1.width}, Fläche = ${reactangle1.getArea()}`);


let reactangle2 = new Reactangle(60, 10);
console.log(`2. Rechteck: Länge = ${reactangle2.length}, Breite = ${reactangle2.width}, Fläche = ${reactangle2.getArea()}`);


let reactangle3 = new Reactangle(9, 5);
console.log(`3. Rechteck: Länge = ${reactangle3.length}, Breite = ${reactangle3.width}, Fläche = ${reactangle3.getArea()}`);
