/**
 * Represents a group that holds a collection of unique values.
 */
class Group {
    /**
     * Creates a new Group with an empty collection.
     */
    constructor() {
        this.group = {};
    }

    /**
     * Adds a value to the group if it isn't already a member.
     * @param {*} item - The value to be added to the group.
     */
    add(item) {
        if (!(item in this.group)) {
            this.group[item] = true;
            // this.group = Object.keys(this.group);
        }
    }

    /**
     * Removes a value from the group if it is a member.
     * @param {*} item - The value to be removed from the group.
     */
    delete(item) {
        if (item in this.group) {
            delete this.group[item];
        }   
    }

    /**
     * Checks if a value is a member of the group.
     * @param {*} item - The value to be checked for membership.
     * @returns {boolean} - Indicates whether the value is a member of the group.
     */
    has(item) {
        return item in this.group;
    }

    /**
     * Creates a new Group from an iterable object.
     * @param {Iterable} iterableObject - An iterable object from which to create the group.
     * @returns {Group} - A new Group containing all the values produced by iterating over the iterable object.
     */
    static from(iterableObject) {
        let newGroup = new Group();
        for (let element of iterableObject) {
            newGroup.add(element);
        }
        return newGroup;
    }
}


class GroupIterator {
    constructor(group) {
        this.index = 0
        this.group = group;
    }
    next() {
        let keysArray = Object.keys(this.group.group);
        let value = keysArray[this.index];

        if (value == keysArray[keysArray.length]) {return {done: true};}
        this.index++;

        return {value, done:false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}


let group = new Group();

group.add(10);
group.add(20);
group.add(30);
group.add(10); // Adding 10 again - should not have any effect
console.log(group);

// console.log(group.has(10)); // Output: true
// console.log(group.has(20)); // Output: true
// console.log(group.has(30)); // Output: true
// console.log(group.has(40)); // Output: false

// let newGroup = Group.from([40, 50, 10, 20, 60, 10]); // Should contain unique values from the array
// console.log(newGroup);

// console.log(newGroup.has(10)); // Output: true
// console.log(newGroup.has(20)); // Output: true
// console.log(newGroup.has(30)); // Output: false
// console.log(newGroup.has(40)); // Output: true
// console.log(newGroup.has(50)); // Output: true
// console.log(newGroup.has(60)); // Output: true

// newGroup.delete(10);

// console.log(newGroup.has(10)); // Output: false

for (item of group) {
    console.log(item);
}

