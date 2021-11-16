
const projects = [
	{ id: 1, name: 'Option 1', probability: 0.3 },
	{ id: 2, name: 'Option 2', probability: 0.5 },
	{ id: 3, name: 'Option 3', probability: 0.15 },
	{ id: 4, name: 'Option 4', probability: 0.05 }
]

const weights = [];

function calculateWeights(arr) {
    for (let i = 0; i < arr.length; i++)
        weights[i] = arr[i].probability + (weights[i - 1] || 0);
}

calculateWeights(projects);

function pickElement(arr, warr) {
    const random = Math.random() * warr[warr.length - 1];

    for (let i = 0; i < warr.length; i++)
        if (warr[i] > random)
            return arr[i];
}

const countsArr = [];
for (let i = 0; i < 500; i++) {
    let item = pickElement(projects, weights);
    
    if (!countsArr.some(e => e.id === item.id))
        countsArr.push({id: item.id, count: 1});
    else
        countsArr.find(e => e.id === item.id).count++;

    console.log(item.name);
}

countsArr.forEach(el => console.log("ID " + el.id + " = " + el.count));
