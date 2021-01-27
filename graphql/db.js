export let people = [
    {
        id: 1,
        name: 'kim', 
        age: 28,
        gender: 'female'
    },
    {
        id: 2,
        name: 'lee', 
        age: 29,
        gender: 'male'
    },
    {
        id: 3,
        name: 'park', 
        age: 30,
        gender: 'female'
    },
    {
        id: 4,
        name: 'lim', 
        age: 31,
        gender: 'male'
    },
    {
        id: 5,
        name: 'choi', 
        age: 32,
        gender: 'female'
    },
    {
        id: 6,
        name: 'go', 
        age: 33,
        gender: 'male'
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}

export const deletePerson = id => {
    const cleanedPeople = people.filter(person => person.id === id);
    if (people.length > cleanedPeople.length) {
        people = cleanedPeople;
        return true;
    } else {
        return false;
    }
}

export const addPerson = (name, age, gender) => {
    const newPerson = {
        id: `${people.length + 1}`,
        name, age, gender
    }
    people.push(newPerson);
    return newPerson;
}
