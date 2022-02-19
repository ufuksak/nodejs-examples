const officers = [
  { age: 20, name: "Captain Piett" },
  { age: 23, name: "General Veers" },
  { age: 57, name: "General Ozzel" },
  { age: 88, name: "Commander Jerjerrod" },
  { age: "not known", name: "Test" },
  { age: null, name: "Test2" },
];

// if the age is not known filter the not known ages from the calculcations
const isFound = (item) => !isNaN(item.age);

// not needed to call but to show the educational purpose how to call map function
const getItem = (item) => item;

// Calculate the oldest age, sum, itemCount
const calculateAge = ({ totalAge, itemCount, oldest, oldestOfficer }, item) => {
  return {
    totalAge: totalAge + item.age,
    itemCount: itemCount + 1,
    oldest: oldest < item.age ? item.age : oldest,
    oldestOfficer: oldest < item.age ? item.name : oldestOfficer,
  };
};

const initialInfo = { totalAge: 0, itemCount: 0, oldest: 0, oldestOfficer: "" };

// Display the sum of the age, oldest officer name, average age.
const { totalAge, itemCount, oldest, oldestOfficer } = officers
  .filter(isFound)
  .map(getItem)
  .reduce(calculateAge, initialInfo);

const averageAge = totalAge / itemCount;
console.log("the sum of all ages of all officers:", totalAge);
console.log(
  "the name of the oldest officer:",
  oldestOfficer + ", Age:" + oldest
);
console.log("the average age of all generals:", averageAge);
