const exampleInput = [
	"addx 15",
	"addx -11",
	"addx 6",
	"addx -3",
	"addx 5",
	"addx -1",
	"addx -8",
	"addx 13",
	"addx 4",
	"noop",
	"addx -1",
	"addx 5",
	"addx -1",
	"addx 5",
	"addx -1",
	"addx 5",
	"addx -1",
	"addx 5",
	"addx -1",
	"addx -35",
	"addx 1",
	"addx 24",
	"addx -19",
	"addx 1",
	"addx 16",
	"addx -11",
	"noop",
	"noop",
	"addx 21",
	"addx -15",
	"noop",
	"noop",
	"addx -3",
	"addx 9",
	"addx 1",
	"addx -3",
	"addx 8",
	"addx 1",
	"addx 5",
	"noop",
	"noop",
	"noop",
	"noop",
	"noop",
	"addx -36",
	"noop",
	"addx 1",
	"addx 7",
	"noop",
	"noop",
	"noop",
	"addx 2",
	"addx 6",
	"noop",
	"noop",
	"noop",
	"noop",
	"noop",
	"addx 1",
	"noop",
	"noop",
	"addx 7",
	"addx 1",
	"noop",
	"addx -13",
	"addx 13",
	"addx 7",
	"noop",
	"addx 1",
	"addx -33",
	"noop",
	"noop",
	"noop",
	"addx 2",
	"noop",
	"noop",
	"noop",
	"addx 8",
	"noop",
	"addx -1",
	"addx 2",
	"addx 1",
	"noop",
	"addx 17",
	"addx -9",
	"addx 1",
	"addx 1",
	"addx -3",
	"addx 11",
	"noop",
	"noop",
	"addx 1",
	"noop",
	"addx 1",
	"noop",
	"noop",
	"addx -13",
	"addx -19",
	"addx 1",
	"addx 3",
	"addx 26",
	"addx -30",
	"addx 12",
	"addx -1",
	"addx 3",
	"addx 1",
	"noop",
	"noop",
	"noop",
	"addx -9",
	"addx 18",
	"addx 1",
	"addx 2",
	"noop",
	"noop",
	"addx 9",
	"noop",
	"noop",
	"noop",
	"addx -1",
	"addx 2",
	"addx -37",
	"addx 1",
	"addx 3",
	"noop",
	"addx 15",
	"addx -21",
	"addx 22",
	"addx -6",
	"addx 1",
	"noop",
	"addx 2",
	"addx 1",
	"noop",
	"addx -10",
	"noop",
	"noop",
	"addx 20",
	"addx 1",
	"addx 2",
	"addx 2",
	"addx -6",
	"addx -11",
	"noop",
	"noop",
	"noop",
];

const realInput = [
	"noop",
	"noop",
	"noop",
	"addx 6",
	"addx -1",
	"noop",
	"addx 5",
	"noop",
	"noop",
	"addx -12",
	"addx 19",
	"addx -1",
	"noop",
	"addx 4",
	"addx -11",
	"addx 16",
	"noop",
	"noop",
	"addx 5",
	"addx 3",
	"addx -2",
	"addx 4",
	"noop",
	"noop",
	"noop",
	"addx -37",
	"noop",
	"addx 3",
	"addx 2",
	"addx 5",
	"addx 2",
	"addx 10",
	"addx -9",
	"noop",
	"addx 1",
	"addx 4",
	"addx 2",
	"noop",
	"addx 3",
	"addx 2",
	"addx 5",
	"addx 2",
	"addx 3",
	"addx -2",
	"addx 2",
	"addx 5",
	"addx -40",
	"addx 25",
	"addx -22",
	"addx 2",
	"addx 5",
	"addx 2",
	"addx 3",
	"addx -2",
	"noop",
	"addx 23",
	"addx -18",
	"addx 2",
	"noop",
	"noop",
	"addx 7",
	"noop",
	"noop",
	"addx 5",
	"noop",
	"noop",
	"noop",
	"addx 1",
	"addx 2",
	"addx 5",
	"addx -40",
	"addx 3",
	"addx 8",
	"addx -4",
	"addx 1",
	"addx 4",
	"noop",
	"noop",
	"noop",
	"addx -8",
	"noop",
	"addx 16",
	"addx 2",
	"addx 4",
	"addx 1",
	"noop",
	"addx -17",
	"addx 18",
	"addx 2",
	"addx 5",
	"addx 2",
	"addx 1",
	"addx -11",
	"addx -27",
	"addx 17",
	"addx -10",
	"addx 3",
	"addx -2",
	"addx 2",
	"addx 7",
	"noop",
	"addx -2",
	"noop",
	"addx 3",
	"addx 2",
	"noop",
	"addx 3",
	"addx 2",
	"noop",
	"addx 3",
	"addx 2",
	"addx 5",
	"addx 2",
	"addx -5",
	"addx -2",
	"addx -30",
	"addx 14",
	"addx -7",
	"addx 22",
	"addx -21",
	"addx 2",
	"addx 6",
	"addx 2",
	"addx -1",
	"noop",
	"addx 8",
	"addx -3",
	"noop",
	"addx 5",
	"addx 1",
	"addx 4",
	"noop",
	"addx 3",
	"addx -2",
	"addx 2",
	"addx -11",
	"noop",
	"noop",
	"noop",
];

const formatInput = input => {
	return input
		.map(item => {
			if (item === "noop") {
				return 0;
			} else {
				const emptyCycleNumber = 0;
				const number = item.split(" ")[1];
				return [emptyCycleNumber, parseInt(number)];
			}
		})
		.flat(1);
};

const computeSignalStrength = (input, positions) => {
	const formattedInput = formatInput(input);
	let X = 1;
	let cycleNumber = 1;

	const signalStrength = formattedInput.reduce((acc, currentX) => {
		if (positions.includes(cycleNumber)) {
			acc += X * cycleNumber;
		}
		X += currentX;
		cycleNumber += 1;
		return acc;
	}, 0);
	return signalStrength;
};

const POSITIONS = [20, 60, 100, 140, 180, 220];

console.log("Part 1 example: ", computeSignalStrength(exampleInput, POSITIONS));
console.log("Part 1 real: ", computeSignalStrength(realInput, POSITIONS));

const computeCRTScreenRender = (input) => {
	const formattedInput = formatInput(input);
	let X = 1;
	let cycleNumber = 1;
	let xPos = 0;
	let yPos = 0;
	const CRTLines = [];

	formattedInput.forEach((currentX, index) => {
		if (index !== 0 && index % 40 === 0) {
			CRTLines[yPos] = CRTLines[yPos].join("");
			xPos = 0;
			yPos += 1;
		}
		if (index !== 0 && index % 239 === 0) {
			CRTLines[yPos] = CRTLines[yPos].join("");
		}
		const xPositionsForX = [X-1, X, X+1];
		if (!CRTLines[yPos]) {
			CRTLines[yPos] = [];
		}
		if (xPositionsForX.includes(xPos)) {
			CRTLines[yPos][xPos] = "#";
		} else {
			CRTLines[yPos][xPos] = ".";
		}
		X += currentX;
		cycleNumber += 1;
		xPos += 1;
	});
	return CRTLines;
};

console.log("Part 2 example: ", computeCRTScreenRender(exampleInput));
console.log("Part 2 real: ", computeCRTScreenRender(realInput));
