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
	const valves = input.map(line => {
		//use regex to capture the data
		const regex1 = /Valve (\w+) has flow rate=(\d+)/;
		const matches1 = line.match(regex1);
		const regex2 = /([A-Z]{2})/g;
		const matches2 = line.match(regex2).filter((_, index) => index > 0);

		return {
			name: matches1[1],
			flowRate: Number(matches1[2]),
			tunnels: matches2,
		};
	});
	return valves;
};

const partOne = input => {
	const valves = extractInput(input);

	// Goal: Most pressure (total flow rate) in 30 minutes
	// Opening a valve   = 1 minute
	// Moving in tunnels = 1 minute
	// Starting a valve AA

	// To this with dijkstra's algorithm
	// 1. Create a graph with all the valves and tunnels
	// 2. Create a priority queue with the starting valve
	// 3. While the queue is not empty and the time is less than 30
	// 3.1 Get the valve with the highest flow rate
	// 3.2 Add 1 minute to the time
	// 3.3 Add the flow rate to the total
	// 3.4 If valve flow rate is greater than 0, open the valve and so add 1 minute to the time
	// 3.5 Set the flow rate of the valve to 0 and add it to the closed valves
	// 3.6 Add the tunnels to the queue
	// 4. Return the total

};

console.log("File: compute.js, Line 35 partOne: ", partOne(exampleInput));

// Results puzzle 1
const a = "";
console.log("Part 1 example: ", a);
console.log("Part 1 real: ", a);

// Puzzle 2

// Results puzzle 2
console.log("Part 2 example: ", a);
console.log("Part 2 real: ", a);
