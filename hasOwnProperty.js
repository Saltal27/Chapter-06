function hasOwnProperty(object, property) {
    let copy = object;
    delete copy.hasOwnProperty;

    return copy.hasOwnProperty(property);
}

let object1 = {
        a: 1,
        b: 2,
        hasOwnProperty: 5
    };

console.log(hasOwnProperty(object1, "t"));

