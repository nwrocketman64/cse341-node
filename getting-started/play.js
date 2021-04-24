// const name = "Nathan";
// let age = 22;
const hasHobbies = true;

// age = 23;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
};

const add = (a, b) => a + b;
const addRandom = () =>  1 + 2;

// console.log(addRandom());
// console.log(add(1, 2));
// console.log(summarizeUser(name, age, hasHobbies));

const person = {
    name: 'Nathan',
    age: 22,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

// person.greet();

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => "Hobby: " + hobby));
// console.log(hobbies);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));

const printName = ({ name }) => {
    console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);