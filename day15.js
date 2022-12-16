const exampleInput = [
	"Sensor at x=2, y=18: closest beacon is at x=-2, y=15",
	"Sensor at x=9, y=16: closest beacon is at x=10, y=16",
	"Sensor at x=13, y=2: closest beacon is at x=15, y=3",
	"Sensor at x=12, y=14: closest beacon is at x=10, y=16",
	"Sensor at x=10, y=20: closest beacon is at x=10, y=16",
	"Sensor at x=14, y=17: closest beacon is at x=10, y=16",
	"Sensor at x=8, y=7: closest beacon is at x=2, y=10",
	"Sensor at x=2, y=0: closest beacon is at x=2, y=10",
	"Sensor at x=0, y=11: closest beacon is at x=2, y=10",
	"Sensor at x=20, y=14: closest beacon is at x=25, y=17",
	"Sensor at x=17, y=20: closest beacon is at x=21, y=22",
	"Sensor at x=16, y=7: closest beacon is at x=15, y=3",
	"Sensor at x=14, y=3: closest beacon is at x=15, y=3",
	"Sensor at x=20, y=1: closest beacon is at x=15, y=3",
];
const realInput = [
	"Sensor at x=2662540, y=1992627: closest beacon is at x=1562171, y=2000000",
	"Sensor at x=3577947, y=3994226: closest beacon is at x=3468220, y=3832344",
	"Sensor at x=34015, y=3658022: closest beacon is at x=-48386, y=3887238",
	"Sensor at x=3951270, y=2868430: closest beacon is at x=3499312, y=2620002",
	"Sensor at x=3136779, y=3094333: closest beacon is at x=2731027, y=3076619",
	"Sensor at x=3415109, y=2591103: closest beacon is at x=3499312, y=2620002",
	"Sensor at x=277465, y=3971183: closest beacon is at x=-48386, y=3887238",
	"Sensor at x=3697201, y=1834735: closest beacon is at x=3499312, y=2620002",
	"Sensor at x=874397, y=1535447: closest beacon is at x=1562171, y=2000000",
	"Sensor at x=2996230, y=3508199: closest beacon is at x=3251079, y=3709457",
	"Sensor at x=2754388, y=3147571: closest beacon is at x=2731027, y=3076619",
	"Sensor at x=524580, y=2640616: closest beacon is at x=-73189, y=1870650",
	"Sensor at x=2718599, y=3106610: closest beacon is at x=2731027, y=3076619",
	"Sensor at x=2708759, y=3688992: closest beacon is at x=3251079, y=3709457",
	"Sensor at x=2413450, y=3994713: closest beacon is at x=3251079, y=3709457",
	"Sensor at x=1881113, y=495129: closest beacon is at x=1562171, y=2000000",
	"Sensor at x=3792459, y=3827590: closest beacon is at x=3468220, y=3832344",
	"Sensor at x=3658528, y=641189: closest beacon is at x=4097969, y=-110334",
	"Sensor at x=1379548, y=3381581: closest beacon is at x=1562171, y=2000000",
	"Sensor at x=3480959, y=3069234: closest beacon is at x=3499312, y=2620002",
	"Sensor at x=3871880, y=3531918: closest beacon is at x=3468220, y=3832344",
	"Sensor at x=2825206, y=2606984: closest beacon is at x=2731027, y=3076619",
	"Sensor at x=3645217, y=2312011: closest beacon is at x=3499312, y=2620002",
	"Sensor at x=3485320, y=3509352: closest beacon is at x=3468220, y=3832344",
	"Sensor at x=56145, y=3879324: closest beacon is at x=-48386, y=3887238",
	"Sensor at x=148776, y=433043: closest beacon is at x=-73189, y=1870650",
	"Sensor at x=3368682, y=3929248: closest beacon is at x=3468220, y=3832344",
	"Sensor at x=3330787, y=2481990: closest beacon is at x=3499312, y=2620002",
	"Sensor at x=2802875, y=3209067: closest beacon is at x=2731027, y=3076619",
	"Sensor at x=2679788, y=3102108: closest beacon is at x=2731027, y=3076619",
	"Sensor at x=3326846, y=3767097: closest beacon is at x=3251079, y=3709457",
	"Sensor at x=3111518, y=1310720: closest beacon is at x=3499312, y=2620002",
];

// Puzzle 1
const findExtremas = input => {
	const extrema = {
		x: { min: Infinity, max: -Infinity },
		y: { min: Infinity, max: -Infinity },
	};
	input.forEach(line => {
		const [xS, yS, xB, yB] = line.match(/-?\d+/g).map(Number);
		extrema.x.min = Math.min(extrema.x.min, xS, xB);
		extrema.x.max = Math.max(extrema.x.max, xS, xB);
		extrema.y.min = Math.min(extrema.y.min, yS, yB);
		extrema.y.max = Math.max(extrema.y.max, yS, yB);
	});
	return extrema;
};

const extractInput = input =>
	input.map(line => {
		const [xS, yS, xB, yB] = line.match(/-?\d+/g).map(Number);
		return {
			xS,
			yS,
			xB,
			yB,
		};
	});

const findBiggestManhattanDistance = rawInput => {
	let biggestManhattanDistance = -Infinity;
	const input = extractInput(rawInput);
	input.forEach(({ xS, yS, xB, yB }) => {
		const distance = Math.abs(xS - xB) + Math.abs(yS - yB);
		if (distance > biggestManhattanDistance) {
			biggestManhattanDistance = distance;
		}
	});
	return biggestManhattanDistance;
};

const partOne = (rawInput, row) => {
	const input = extractInput(rawInput);
	const extrema = findExtremas(rawInput);
	const biggestManhattanDistance = findBiggestManhattanDistance(rawInput);
	const {
		x: { min: xMin, max: xMax },
	} = extrema;

	let count = 0;
	const line = [];

	const startX = xMin - biggestManhattanDistance;
	const endX = xMax + biggestManhattanDistance;
	for (let x = startX; x <= endX; x++) {
		let bypass = false;
		for (let i = 0; i <= input.length - 1; i++) {
			const { xS, yS, xB, yB } = input[i];
			if (yS === row && xS === x) {
				line.push("S");
				bypass = true;
				count++;
				break;
			}
			if (yB === row && xB === x) {
				line.push("B");
				bypass = true;
				break;
			}
		}
		if (bypass) {
			continue;
		}

		let blocked = false;
		for (let i = 0; i <= input.length - 1; i++) {
			const { xS, yS, xB, yB } = input[i];
			const sensorManhattanDistance = Math.abs(xS - xB) + Math.abs(yS - yB);
			const manhattanDistanceForXY = Math.abs(xS - x) + Math.abs(yS - row);
			blocked = manhattanDistanceForXY <= sensorManhattanDistance;
			if (blocked) {
				line.push("#");
				count++;
				break;
			}
		}
		if (!blocked) {
			line.push(".");
		}
	}
	// console.log('File: compute.js, Line 140 line: ', line.join(""));
	return count;
};

console.log("PART 1 example - ", partOne(exampleInput, 10));
console.log("PART 1 real - ",partOne(realInput, 2000000));

const findDistressSignalBeaconPosition = (rawInput, minXY, maxYX) => {
	const input = extractInput(rawInput);
	const distressBeaconPosition = { x: null, y: null };

	let found = false;
	for (let y = minXY; y <= maxYX; y++) {
		if (found) {
			break;
		}
		const intervals = [];
		for (let i = 0; i <= input.length - 1; i++) {
			if (found) {
				break;
			}
			const { xS, yS, xB, yB } = input[i];
			const sensorManhattanDistance = Math.abs(xS - xB) + Math.abs(yS - yB);
			const manhattanDepth = Math.abs(yS - y);
			// si Math.abs(yS - y) > distanceManhattan alors on ne prend pas en compte la source
			if (manhattanDepth > sensorManhattanDistance) {
				continue;
			}
			// si Math.abs(yS - y) <= distanceManhattan alors on prend en compte la source
			// l'intervalle est défini grâce à la distance de manhattan et la position (yS,xS) de la source
			// il faut calculer Math.abs(yS - y), ça nous donnne la profondeur de manhattan, et de cette profondeur
			// on peut calculer l'intervalle en partant de xS et en retirant et ajoutant en fonction de la distance
			// la valeur à ajouter est calculée comme suit: [xS - distanceManhattan + Math.abs(yS - y), xS + distanceManhattan - Math.abs(yS - y)]

			const intervalOnLine = [
				xS - sensorManhattanDistance + manhattanDepth,
				xS + sensorManhattanDistance - manhattanDepth,
			];
			intervals.push(intervalOnLine);
		}
		const sortedIntervals = [...intervals.sort((a, b) => a[0] - b[0])];
		// Ensuite une fois qu'on a tous les intervalles, il faut les merger si c'est possible
		// Si ça ne l'est pas, alors on a trouvé le beacon là où il y a un trou dans l'intervalle

		const mergedIntervals = sortedIntervals.reduce((acc, interval) => {
			if (acc.length === 0) {
				acc.push(interval);
				return acc;
			}
			const lastInterval = acc[acc.length - 1];
			if (interval[0] <= lastInterval[1]) {
				lastInterval[1] = Math.max(lastInterval[1], interval[1]);
			} else {
				acc.push(interval);
			}
			return acc;
		}, []);

		if (mergedIntervals.length === 2) {
			const [firstInterval] = mergedIntervals;
			distressBeaconPosition.x = firstInterval[1] + 1;
			distressBeaconPosition.y = y;
			found = true;
			break;
		}

	}

	const { x, y } = distressBeaconPosition;
	console.log(`Beacon is at position (x:${x}, y:${y})`);
	if (x === null || y === null) {
		console.log("not found !!!");
		return;
	}

	return x * 4000000 + y;
};

console.log("PART 2 - example: ", findDistressSignalBeaconPosition(exampleInput, 0, 20));
console.log("PART 2 - real: ", findDistressSignalBeaconPosition(realInput, 0, 4000000));
