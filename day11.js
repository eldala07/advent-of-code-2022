

const exampleInput = [
	{
		items: [79, 98],
		operation: ["times", 19],
		test: ["divisible", 23, 2, 3],
	},
	{
		items: [54, 65, 75, 74],
		operation: ["add", 6],
		test: ["divisible", 19, 2, 0],
	},
	{
		items: [79, 60, 97],
		operation: ["times", "old"],
		test: ["divisible", 13, 1, 3],
	},
	{
		items: [74],
		operation: ["add", 3],
		test: ["divisible", 17, 0, 1],
	},
];

const realInput = [
	{
		items: [66, 59, 64, 51],
		operation: ["times", 3],
		test: ["divisible", 2, 1, 4],
	},
	{
		items: [67, 61],
		operation: ["times", 19],
		test: ["divisible", 7, 3, 5],
	},
	{
		items: [86, 93, 80, 70, 71, 81, 56],
		operation: ["add", 2],
		test: ["divisible", 11, 4, 0],
	},
	{
		items: [94],
		operation: ["times", "old"],
		test: ["divisible", 19, 7, 6],
	},
	{
		items: [71, 92, 64],
		operation: ["add", 8],
		test: ["divisible", 3, 5, 1],
	},
	{
		items: [58, 81, 92, 75, 56],
		operation: ["add", 6],
		test: ["divisible", 5, 3, 6],
	},
	{
		items: [82, 98, 77, 94, 86, 81],
		operation: ["add", 7],
		test: ["divisible", 17, 7, 2],
	},
	{
		items: [54, 95, 70, 93, 88, 93, 63, 50],
		operation: ["add", 4],
		test: ["divisible", 13, 2, 0],
	},
];

const lowerWorryLevel = (worryLevel, howMuchToDivide) => {
	return Math.floor(worryLevel / howMuchToDivide);
};

const executeOperation = (operation, oldWorryLevel) => {
		const operationType = operation[0];
		const operationValue = operation[1] === "old" ? oldWorryLevel : operation[1];
		let newWorryLevel = 0;
		switch (operationType) {
			case "add":
				newWorryLevel = oldWorryLevel + operationValue;
				break;
			case "times":
				newWorryLevel = oldWorryLevel * operationValue;
				break;
			default:
				break;
		}
		return newWorryLevel;
};

const testWorryLevel = (worryLevel, test) => {
	const testType = test[0]
	const testDivisor = test[1]
	const testTargetMonkeyTrue = test[2]
	const testTargetMonkeyFalse = test[3]
	let testResult = false;
	switch (testType) {
		case "divisible":
			testResult = worryLevel % testDivisor === 0;
			break;
		default:
			break;
	}
	return testResult ? testTargetMonkeyTrue : testTargetMonkeyFalse;
}

const computeActivity = (activityTracker, sourceMonkey) => {
	if (!activityTracker[sourceMonkey]) {
		activityTracker[sourceMonkey] = 0;
	}
	activityTracker[sourceMonkey] += 1;
}

const moveItemToTargetMonkey = (item, sourceMonkey, targetMonkey, monkeys) => {
	monkeys[sourceMonkey].items.shift();
	monkeys[targetMonkey].items.push(item);
}

const computeMonkeyBusiness = (input, nbRounds, shouldManageWorryLevel = true) => {
	const activityTracker = {};
	for (let i = 0; i < nbRounds; i++) {
		input.forEach((monkey, currentMonkeyIndex) => {
			const monkeyItems = [...monkey.items];
			monkeyItems.forEach((worryLevel) => {
				const newWorryLevel = executeOperation(monkey.operation, worryLevel);
				const lowerWorryLevelResult = shouldManageWorryLevel ? lowerWorryLevel(newWorryLevel, 3) : newWorryLevel;
				const targetMonkey = testWorryLevel(lowerWorryLevelResult, monkey.test);
				moveItemToTargetMonkey(lowerWorryLevelResult, currentMonkeyIndex, targetMonkey, input);
				computeActivity(activityTracker, currentMonkeyIndex);
			});
		});
	}
	const activities = Object.values(activityTracker).sort((a, b) => b - a);
	return activities[0] * activities[1];
}

console.log(computeMonkeyBusiness(exampleInput, 20));
console.log(computeMonkeyBusiness(realInput, 20));

console.log(computeMonkeyBusiness(exampleInput, 10000, false));
console.log(computeMonkeyBusiness(realInput, 10000, false));
