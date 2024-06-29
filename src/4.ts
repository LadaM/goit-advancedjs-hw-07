class Key {
    private readonly signature: number;
    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

abstract class House {
    private door: boolean;
    constructor(private readonly key: Key, public readonly tenants: Person[] = []) {
        this.key = key;
        this.door = false;
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }
}
class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }
}
class Person {
    constructor(private readonly key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};