interface UserData {
    firstName: string;
    age: number;
    run(message: string): void; 
}

class User implements UserData {
    firstName: string;
    age: number;

    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    run(message: string) {
        console.log(`${this.firstName} who is ${this.age}yrs old. Here is your message: ${message}`)
    }
}

const user1 = new User("Anshu", 24);

console.log(user1.run("You are in bliss and flowing in the river of truth."))