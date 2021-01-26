const Person = {
    name: 'kim', 
    age: 28,
    gender: 'female'
}

const resolvers = {
    Query: {
        person: () => Person
    }
}

export default resolvers;