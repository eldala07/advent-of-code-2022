const exampleInput = [
	"Valve AA has flow rate=0; tunnels lead to valves DD, II, BB",
	"Valve BB has flow rate=13; tunnels lead to valves CC, AA",
	"Valve CC has flow rate=2; tunnels lead to valves DD, BB",
	"Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE",
	"Valve EE has flow rate=3; tunnels lead to valves FF, DD",
	"Valve FF has flow rate=0; tunnels lead to valves EE, GG",
	"Valve GG has flow rate=0; tunnels lead to valves FF, HH",
	"Valve HH has flow rate=22; tunnel leads to valve GG",
	"Valve II has flow rate=0; tunnels lead to valves AA, JJ",
	"Valve JJ has flow rate=21; tunnel leads to valve II",
];

const realInput = [
	"Valve JI has flow rate=21; tunnels lead to valves WI, XG",
	"Valve DM has flow rate=3; tunnels lead to valves JX, NG, AW, BY, PF",
	"Valve AZ has flow rate=0; tunnels lead to valves FJ, VC",
	"Valve YQ has flow rate=0; tunnels lead to valves TE, OP",
	"Valve WI has flow rate=0; tunnels lead to valves JI, VC",
	"Valve NE has flow rate=0; tunnels lead to valves ZK, AA",
	"Valve FM has flow rate=0; tunnels lead to valves LC, DU",
	"Valve QI has flow rate=0; tunnels lead to valves TE, JW",
	"Valve OY has flow rate=0; tunnels lead to valves XS, VF",
	"Valve XS has flow rate=18; tunnels lead to valves RR, OY, SV, NQ",
	"Valve NU has flow rate=0; tunnels lead to valves IZ, BD",
	"Valve JX has flow rate=0; tunnels lead to valves DM, ZK",
	"Valve WT has flow rate=23; tunnels lead to valves OV, QJ",
	"Valve KM has flow rate=0; tunnels lead to valves TE, OL",
	"Valve NG has flow rate=0; tunnels lead to valves II, DM",
	"Valve FJ has flow rate=0; tunnels lead to valves AZ, II",
	"Valve QR has flow rate=0; tunnels lead to valves ZK, KI",
	"Valve KI has flow rate=9; tunnels lead to valves ZZ, DI, TL, AJ, QR",
	"Valve ON has flow rate=0; tunnels lead to valves LC, QT",
	"Valve AW has flow rate=0; tunnels lead to valves DM, AA",
	"Valve HI has flow rate=0; tunnels lead to valves TE, VC",
	"Valve XG has flow rate=0; tunnels lead to valves II, JI",
	"Valve II has flow rate=19; tunnels lead to valves LF, NG, OL, FJ, XG",
	"Valve VC has flow rate=24; tunnels lead to valves WI, HI, AZ",
	"Valve VJ has flow rate=0; tunnels lead to valves UG, AA",
	"Valve IZ has flow rate=0; tunnels lead to valves VF, NU",
	"Valve EJ has flow rate=0; tunnels lead to valves ZK, LC",
	"Valve DU has flow rate=12; tunnels lead to valves TC, UG, FM",
	"Valve ZK has flow rate=10; tunnels lead to valves JX, EJ, JW, QR, NE",
	"Valve XF has flow rate=25; tunnels lead to valves OP, VT",
	"Valve LC has flow rate=4; tunnels lead to valves FM, EJ, ON, AJ, PF",
	"Valve SV has flow rate=0; tunnels lead to valves XS, IY",
	"Valve LF has flow rate=0; tunnels lead to valves II, OV",
	"Valve DI has flow rate=0; tunnels lead to valves KI, BY",
	"Valve OP has flow rate=0; tunnels lead to valves YQ, XF",
	"Valve NQ has flow rate=0; tunnels lead to valves TC, XS",
	"Valve QJ has flow rate=0; tunnels lead to valves VT, WT",
	"Valve IY has flow rate=22; tunnel leads to valve SV",
	"Valve AJ has flow rate=0; tunnels lead to valves LC, KI",
	"Valve TE has flow rate=11; tunnels lead to valves QI, HI, KM, YQ",
	"Valve ZZ has flow rate=0; tunnels lead to valves KI, AA",
	"Valve VT has flow rate=0; tunnels lead to valves XF, QJ",
	"Valve OL has flow rate=0; tunnels lead to valves KM, II",
	"Valve TC has flow rate=0; tunnels lead to valves NQ, DU",
	"Valve TL has flow rate=0; tunnels lead to valves VF, KI",
	"Valve QT has flow rate=0; tunnels lead to valves AA, ON",
	"Valve BY has flow rate=0; tunnels lead to valves DM, DI",
	"Valve OV has flow rate=0; tunnels lead to valves LF, WT",
	"Valve VN has flow rate=0; tunnels lead to valves RR, BD",
	"Valve VF has flow rate=13; tunnels lead to valves OY, IZ, TL",
	"Valve BD has flow rate=17; tunnels lead to valves NU, VN",
	"Valve UG has flow rate=0; tunnels lead to valves VJ, DU",
	"Valve PF has flow rate=0; tunnels lead to valves LC, DM",
	"Valve RR has flow rate=0; tunnels lead to valves XS, VN",
	"Valve AA has flow rate=0; tunnels lead to valves QT, ZZ, AW, VJ, NE",
	"Valve JW has flow rate=0; tunnels lead to valves ZK, QI",
];

// Puzzle 1

const extractInput = input => {
	const valvesMap = {};
	input.forEach(line => {
		//use regex to capture the data
		const regex1 = /Valve (\w+) has flow rate=(\d+)/;
		const matches1 = line.match(regex1);
		const regex2 = /([A-Z]{2})/g;
		const matches2 = line.match(regex2).filter((_, index) => index > 0);

		valvesMap[matches1[1]] = {
			flowRate: Number(matches1[2]),
			tunnels: matches2,
		};
	});
	return valvesMap;
};

const memoize = fn => {
	let cache = {};
	return (...args) => {
		const valve = args[0];
		const minSpent = args[1];
		const valvesOpened = [...args[2]].sort().join("");
		const key = `${valve}-${minSpent}-${valvesOpened}`;
		if (key in cache) {
			return cache[key];
		} else {
			let result = fn(...args);
			cache[key] = result;
			return result;
		}
	};
};

const getBiggestFlowRate = memoize((start, minutesSpent, valvesOpened, valves) => {
	if (minutesSpent >= 30) {
		return 0;
	}
	let biggestComposedFlowRate = 0;

	const currentValve = valves[start];
	const totalValveFlowRate = currentValve.flowRate * (30 - (minutesSpent + 1));

	for (const tunnel of currentValve.tunnels) {
		if (currentValve.flowRate > 0 && !valvesOpened.has(start)) {
			const flowRate = getBiggestFlowRate(
				tunnel,
				minutesSpent + 2,
				new Set([...valvesOpened, start]),
				valves
			);
			biggestComposedFlowRate = Math.max(
				biggestComposedFlowRate,
				totalValveFlowRate + flowRate
			);
		}
		const flowRate = getBiggestFlowRate(
			tunnel,
			minutesSpent + 1,
			new Set(valvesOpened),
			valves
		);
		biggestComposedFlowRate = Math.max(biggestComposedFlowRate, flowRate);
	}

	return biggestComposedFlowRate;
});

const partOne = input => {
	const valves = extractInput(input);
	return getBiggestFlowRate("AA", 0, new Set(), valves);
};

// Since we use memoization, we have to comment the example run to get the correct answer for the real input
// console.log("File: compute.js, Line 35 partOne: ", partOne(exampleInput));
console.log("File: compute.js, Line 36 partOne: ", partOne(realInput));

// LESSONS LEARNED: Memoization is a must for this problem. Without it, the code will run for a long time.
// I learned how to memoize a recursive function in javascript (same as lru_cache from functools in python).
// I also had to use a Set to store the valves opened, because the order of the valves opened is not important.
