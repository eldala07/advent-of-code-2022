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

const lowerWorryLevel = (worryLevel, divideBy) => {
	return Math.floor(worryLevel / divideBy);
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
	const testType = test[0];
	const testDivisor = test[1];
	const testTargetMonkeyTrue = test[2];
	const testTargetMonkeyFalse = test[3];
	let testResult = false;
	switch (testType) {
		case "divisible":
			testResult = worryLevel % testDivisor === 0;
			break;
		default:
			break;
	}
	return testResult ? testTargetMonkeyTrue : testTargetMonkeyFalse;
};

const computeActivity = (activityTracker, sourceMonkey) => {
	if (!activityTracker[sourceMonkey]) {
		activityTracker[sourceMonkey] = 0;
	}
	activityTracker[sourceMonkey] += 1;
};

const moveItemToTargetMonkey = (item, sourceMonkey, targetMonkey, monkeys) => {
	monkeys[sourceMonkey].items.shift();
	monkeys[targetMonkey].items.push(item);
};

const checkIfActivityIsCorrect = (activityTracker, round) => {
	if (
		round <= 19 ) {
		console.log(
			`File: compute.js, Line 130 activityTracker for round ${round + 1}: ${JSON.stringify(
				activityTracker
			)}`
		);
	}
	if (
		round === 0 ||
		round === 19 ||
		round === 999 ||
		round === 1999 ||
		round === 2999 ||
		round === 3999 ||
		round === 4999 ||
		round === 5999 ||
		round === 6999 ||
		round === 7999 ||
		round === 8999 ||
		round === 9999
	) {
		if (round === 0 && '{"0":2,"1":4,"2":3,"3":6}' === JSON.stringify(activityTracker)) {
			console.log("LEVEL 1 PASSED");
		}
		if (round === 19 && '{"0":99,"1":97,"2":8,"3":103}' === JSON.stringify(activityTracker)) {
			console.log("LEVEL 2 PASSED");
		}
		if (
			round === 999 &&
			'{"0":5204,"1":4792,"2":199,"3":5192}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 3 PASSED");
		}
		if (
			round === 1999 &&
			'{"0":10419,"1":9577,"2":392,"3":10391}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 4 PASSED");
		}
		if (
			round === 2999 &&
			'{"0":15638,"1":14358,"2":587,"3":15593}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 5 PASSED");
		}
		if (
			round === 3999 &&
			'{"0":20858,"1":19138,"2":780,"3":20797}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 6 PASSED");
		}
		if (
			round === 4999 &&
			'{"0":26075,"1":23921,"2":974,"3":26000}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 7 PASSED");
		}
		if (
			round === 5999 &&
			'{"0":31294,"1":28702,"2":1165,"3":31204}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 8 PASSED");
		}
		if (
			round === 6999 &&
			'{"0":36508,"1":33488,"2":1360,"3":36400}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 9 PASSED");
		}
		if (
			round === 7999 &&
			'{"0":41728,"1":38268,"2":1553,"3":41606}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 10 PASSED");
		}
		if (
			round === 8999 &&
			'{"0":46945,"1":43051,"2":1746,"3":46807}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 11 PASSED");
		}
		if (
			round === 9999 &&
			'{"0":52166,"1":47830,"2":1938,"3":52013}' === JSON.stringify(activityTracker)
		) {
			console.log("LEVEL 12 PASSED");
		}
	}
}

// TRY TO PASS SOME ROUNDS - not working
// TRY TO CHANGE THE DIVIDER - not working
// TRY MINUS FIXED VALUE - not working
// TRY TO MULTIPLY BY VALUE LOWER THAN 1 - not working
// TRY MONKEY HAS AT LEAST 1, 2, 3 items

const computeMonkeyBusiness = (
	input,
	nbRounds,
	shouldManageWorryLevel = true,
) => {
	const supermodulo = input.reduce((acc, monkey) => {
		acc *= monkey.test[1];
		return acc;
	}, 1);
	const activityTracker = {};
	for (let i = 0; i < nbRounds; i++) {
		input.forEach((monkey, currentMonkeyIndex) => {
			const monkeyItems = [...monkey.items];
			monkeyItems.forEach(worryLevel => {
				const newWorryLevel = executeOperation(monkey.operation, worryLevel);
				const lowerWorryLevelResult = shouldManageWorryLevel
					? lowerWorryLevel(newWorryLevel, 3)
					: newWorryLevel % supermodulo;
				const targetMonkey = testWorryLevel(lowerWorryLevelResult, monkey.test);
				moveItemToTargetMonkey(
					lowerWorryLevelResult,
					currentMonkeyIndex,
					targetMonkey,
					input
				);
				computeActivity(activityTracker, currentMonkeyIndex);
			});
		});
		// checkIfActivityIsCorrect(activityTracker, i);
	}
	const activities = Object.values(activityTracker).sort((a, b) => b - a);
	return activities[0] * activities[1];
};

console.log("PART 1 example: ", computeMonkeyBusiness(exampleInput, 20));
console.log("PART 1 real: ", computeMonkeyBusiness(realInput, 20));


const exampleInputP2 = [
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

const realInputP2 = [
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


console.log("PART 2 example: ", computeMonkeyBusiness(exampleInputP2, 10000, false));
console.log("PART 2 real: ", computeMonkeyBusiness(realInputP2, 10000, false));
