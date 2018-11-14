function createReactangle(length,width){
    return {
        length,
        width,
        getArea: function () {
            return this.length * this.width;
        }
    };
}

let reactangle1 = createReactangle(7, 4);
console.log(`1. Rechteck: Länge = ${reactangle1.length}, Breite = ${reactangle1.width}, Fläche = ${reactangle1.getArea()}`);



function createReactangle(length,width){
    return {
        length,
        width,
        getArea: function () {
            return this.length * this.width;
        }
    };
}

let reactangle2 = createReactangle(30, 5);
console.log(`1. Rechteck: Länge = ${reactangle2.length}, Breite = ${reactangle2.width}, Fläche = ${reactangle2.getArea()}`);