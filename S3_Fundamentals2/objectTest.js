const miguel = {
    firstName: 'Miguel',
    lastName: 'Fialho',
    birthYear: 1998,
    job: 'intern',
    friends: ['Thiciane', 'Beatriz', 'Mirela'],
    hasDriverLincense: false,

    calcAge: function() {
        this.age = 2022 - this.birthYear
        return this.age
    }
}

// const print = `${miguel.firstName} has ${miguel.friends.length} friends, and his best friend is called ${miguel.friends[1]}` 

// console.log(print);

console.log(miguel.calcAge());

console.log(miguel.age)

console.log(`${miguel.firstName} is a ${miguel.age}-year old ${miguel.job}, and he ${ miguel.hasDriverLincense ? "has a driver's license" : "don't have a driver's license"}`)
