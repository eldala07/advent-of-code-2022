

/*
 * Tried part 1 by using visualisation, failed.. - perf issues
 */

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

const normalizeInput = (input, extrema) => {
	const {
		x: { min: xMin },
		y: { min: yMin },
	} = extrema;
	return input.map(line => {
		const [xS, yS, xB, yB] = line.match(/-?\d+/g).map(Number);
		return {
			xS: xS - xMin,
			yS: yS - yMin,
			xB: xB - xMin,
			yB: yB - yMin,
		};
	});
};

const drawMap = (input, extrema, drawToConsole) => {
	const {
		x: { min: xMin, max: xMax },
		y: { min: yMin, max: yMax },
	} = extrema;
	const map = new Array(yMax - yMin + 1)
		.fill(".")
		.map(() => new Array(xMax - xMin + 1).fill("."));
	input.forEach(({ xS, yS, xB, yB }) => {
		map[yS][xS] = "S";
		map[yB][xB] = "B";
	});
	if (drawToConsole) {
		console.log(map.map(line => line.join("")));
	}
	return map;
};

const canSetAsDeadZone = (map, x, y) => {
	if (x < 0 || x > map[0].length - 1 || y < 0 || y > map.length - 1) return false;
	if (map[y][x] === "S") return false;
	if (map[y][x] === "B") return false;
	return true;
};

const drawAroundPos = (map, x, y, distance) => {
	if (distance === 0) return;
	if (canSetAsDeadZone(map, x, y - 1)) {
		map[y - 1][x] = "#";
		drawAroundPos(map, x, y - 1, distance - 1);
	}
	if (canSetAsDeadZone(map, x, y + 1)) {
		map[y + 1][x] = "#";
		drawAroundPos(map, x, y + 1, distance - 1);
	}
	if (canSetAsDeadZone(map, x - 1, y)) {
		map[y][x - 1] = "#";
		drawAroundPos(map, x - 1, y, distance - 1);
	}
	if (canSetAsDeadZone(map, x + 1, y)) {
		map[y][x + 1] = "#";
		drawAroundPos(map, x + 1, y, distance - 1);
	}
};

const drawMapWithDeadAreaAroundSensors = (input, extrema, drawToConsole) => {
	const {
		x: { min: xMin, max: xMax },
		y: { min: yMin, max: yMax },
	} = extrema;
	const map2 = Array.from({ length: yMax - yMin + 1 }).fill(".");
	const map = map2.map(() => Array.from({ length: xMax - xMin + 1 }).fill("."));
	input.forEach(({ xS, yS, xB, yB }) => {
		map[yS][xS] = "S";
		map[yB][xB] = "B";
		const distance = Math.abs(xS - xB) + Math.abs(yS - yB);
		drawAroundPos(map, xS, yS, distance);
	});
	if (drawToConsole) {
		console.log(map.map(line => line.join("")));
	}
	return map;
};

const countDeadZones = (map, row) => {
	let count = 0;
	for (let i = 0; i < map[row].length; i++) {
		if (map[row][i] === "#") count++;
	}
	return count;
};

const partOne = (input, row, drawToConsole) => {
	const extrema = findExtremas(input);
	const normalizedInput = normalizeInput(input, extrema);
	// const initialMap = drawMap(normalizedInput, extrema, drawToConsole);
	const map = drawMapWithDeadAreaAroundSensors(normalizedInput, extrema, drawToConsole);
	return countDeadZones(map, row);
};

// Results puzzle 1
console.log(partOne(exampleInput, 10, true));
console.log(partOne(realInput, 2000000, false));
