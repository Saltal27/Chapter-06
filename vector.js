/**
 * Represents a vector in two-dimensional space.
 */
class Vec {
    /**
     * Creates a new vector with the given x and y coordinates.
     * @param {number} x - The x-coordinate of the vector.
     * @param {number} y - The y-coordinate of the vector.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    /**
     * Returns a new vector that is the sum of this vector and another vector.
     * @param {Vec} vector - The vector to be added.
     * @returns {Vec} - The sum of the two vectors.
     */
    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    };
    
    /**
     * Returns a new vector that is the difference of this vector and another vector.
     * @param {Vec} vector - The vector to be subtracted.
     * @returns {Vec} - The difference of the two vectors.
     */
    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    };
    
    /**
     * Computes the length of the vector.
     * @returns {number} - The length of the vector.
     */
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}


let vector1 = new Vec(3, 4);
let vector2 = new Vec(1, 2);

let sumVector = vector1.plus(vector2);
console.log("Sum of vectors:", sumVector); // Output: {x: 4, y: 6}

let diffVector = vector1.minus(vector2);
console.log("Difference of vectors:", diffVector); // Output: {x: 2, y: 2}

console.log("Length of vector 1:", vector1.length); 
console.log("Length of vector 2:", vector2.length); 

