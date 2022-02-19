let people = [
    {name: 'Matt', age: 25},
    {name: 'Test', age: 23},
    {name: 'Cami', age: 29}
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
    }, {})
}

let groupedPeople = groupBy(people, 'age');
console.log(groupedPeople)
