const exampleInput = [
	"Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 2 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.",
	"Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 3 ore and 12 obsidian.",
];

const realInput = [
	"Blueprint 1: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 11 clay. Each geode robot costs 3 ore and 8 obsidian.",
	"Blueprint 2: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 14 clay. Each geode robot costs 3 ore and 16 obsidian.",
	"Blueprint 3: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 15 clay. Each geode robot costs 3 ore and 9 obsidian.",
	"Blueprint 4: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 15 clay. Each geode robot costs 2 ore and 8 obsidian.",
	"Blueprint 5: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 18 obsidian.",
	"Blueprint 6: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 4 ore and 20 obsidian.",
	"Blueprint 7: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 2 ore and 20 obsidian.",
	"Blueprint 8: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 10 clay. Each geode robot costs 4 ore and 10 obsidian.",
	"Blueprint 9: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 15 clay. Each geode robot costs 4 ore and 16 obsidian.",
	"Blueprint 10: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 19 clay. Each geode robot costs 4 ore and 12 obsidian.",
	"Blueprint 11: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 3 ore and 17 obsidian.",
	"Blueprint 12: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 19 clay. Each geode robot costs 2 ore and 12 obsidian.",
	"Blueprint 13: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 16 clay. Each geode robot costs 4 ore and 17 obsidian.",
	"Blueprint 14: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 4 ore and 9 obsidian.",
	"Blueprint 15: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 7 obsidian.",
	"Blueprint 16: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 9 obsidian.",
	"Blueprint 17: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 3 ore and 8 obsidian.",
	"Blueprint 18: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 11 clay. Each geode robot costs 2 ore and 7 obsidian.",
	"Blueprint 19: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 2 ore and 19 obsidian.",
	"Blueprint 20: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 4 ore and 8 obsidian.",
	"Blueprint 21: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 9 clay. Each geode robot costs 3 ore and 7 obsidian.",
	"Blueprint 22: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 3 ore and 12 obsidian.",
	"Blueprint 23: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 14 clay. Each geode robot costs 3 ore and 19 obsidian.",
	"Blueprint 24: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 16 clay. Each geode robot costs 3 ore and 9 obsidian.",
	"Blueprint 25: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 9 clay. Each geode robot costs 4 ore and 16 obsidian.",
	"Blueprint 26: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 12 clay. Each geode robot costs 2 ore and 10 obsidian.",
	"Blueprint 27: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 3 ore and 19 obsidian.",
	"Blueprint 28: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 3 ore and 9 obsidian.",
	"Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 4 ore and 11 obsidian.",
	"Blueprint 30: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 13 clay. Each geode robot costs 2 ore and 20 obsidian.",
];

// 1. extract blueprints
// 2. prepare a map to store blueprints quality levels
// 3. forEach blueprint
// 3.1. prepare a map to store robots
// 3.2. prepare a map to store resources
// 3.3. while minute <= 24
// 3.3.1. list robots
// 3.3.2. list resources
// 3.3.3. create robots if possible
// 3.3.4. collect resources with active robots
// 3.3.5. activate robots
// 3.4. compute quality level for this blueprint
// 4. sum all quality levels and return

const ORE = "ore";
const CLAY = "clay";
const OBSIDIAN = "obsidian";
const GEODE = "geode";
const ROBOT_TYPES = [ORE, CLAY, OBSIDIAN, GEODE];

const extractInput = input => {
	const robotsCosts = {};
	input.forEach((blueprint, blueprintIndex) => {
		let resourcesMap = {};

		const factory = blueprint.split("Each");
		factory.forEach((item, robotTypeIndex) => {
			if (robotTypeIndex === 0) return;
			const regex1 =
				/(?:(\d+ ores?))?(?:[a-zA-Z])*(?:(\d+ clays?))?(?:[a-zA-Z])*(?:(\d+ obsidians?))?(?:[a-zA-Z])*/g;
			const matches = item.match(regex1);
			const filteredMatches = matches.filter(item =>
				item.split(" ").some(word => [ORE, CLAY, OBSIDIAN].includes(word))
			);

			resourcesMap[ROBOT_TYPES[robotTypeIndex - 1]] = {
				ore: filteredMatches.find(item => item.split(" ")[1] === ORE)
					? Number(filteredMatches.find(item => item.split(" ")[1] === ORE).split(" ")[0])
					: 0,
				clay: filteredMatches.find(item => item.split(" ")[1] === CLAY)
					? Number(
							filteredMatches.find(item => item.split(" ")[1] === CLAY).split(" ")[0]
					  )
					: 0,
				obsidian: filteredMatches.find(item => item.split(" ")[1] === OBSIDIAN)
					? Number(
							filteredMatches
								.find(item => item.split(" ")[1] === OBSIDIAN)
								.split(" ")[0]
					  )
					: 0,
				geode: 0,
			};
		});

		robotsCosts[blueprintIndex + 1] = {
			ore: resourcesMap[ORE] ?? 0,
			clay: resourcesMap[CLAY] ?? 0,
			obsidian: resourcesMap[OBSIDIAN] ?? 0,
			geode: resourcesMap[GEODE] ?? 0,
		};
	});
	return robotsCosts;
};

const getAvailableResources = extractors =>
	Object.entries(extractors).reduce((acc, type) => {
		acc[type[0]] = type[1].quantity;
		return acc;
	}, {});

const checkIfEnoughResourcesAndCompute = (needed, available, extractors) => {
	const neededArr = Object.values(needed);
	const availableArr = Object.values(available);
	const enoughResources = availableArr.every((av, index) => av >= neededArr[index]);
	let updatedResources = null;

	if (enoughResources) {
		updatedResources = availableArr.map((item, index) => item - neededArr[index]);
		const extractorsCpy = {
			ore: { ...extractors[ORE] },
			clay: { ...extractors[CLAY] },
			obsidian: { ...extractors[OBSIDIAN] },
			geode: { ...extractors[GEODE] },
		};
		collectResources(extractorsCpy);
	}
	return [enoughResources, updatedResources];
};

const payRobot = (updatedResources, extractors) => {
	extractors[ORE].quantity = updatedResources[0];
	extractors[CLAY].quantity = updatedResources[1];
	extractors[OBSIDIAN].quantity = updatedResources[2];
	extractors[GEODE].quantity = updatedResources[3];
};

const canCreate = (robotType, extractors) => {
	let resourcesNeeded = extractors[robotType].robotCost;
	let resourcesAvailable = getAvailableResources(extractors);
	// console.log("res ne:", resourcesNeeded)
	// console.log("res av:", resourcesAvailable)

	return checkIfEnoughResourcesAndCompute(resourcesNeeded, resourcesAvailable, extractors);
};

const collectResources = extractors => {
	Object.entries(extractors).forEach(entry => {
		extractors[entry[0]].quantity +=
			extractors[entry[0]].nbRobots * extractors[entry[0]].collectingPower;
		extractors[entry[0]].nbRobots += extractors[entry[0]].nbInactiveRobots;
		extractors[entry[0]].nbInactiveRobots = 0;
	});
};

const memoize = fn => {
	let cache = {};
	return (...args) => {
		const blueprintIndex = args[0];
		const extractors = args[1];
		const minutesLeft = args[2];
		const key = `${blueprintIndex}-${minutesLeft}-${JSON.stringify(extractors)}`;
		if (key in cache) {
			return cache[key];
		} else {
			let result = fn(...args);
			cache[key] = result;
			return result;
		}
	};
};

const biggestNumberOfGeodesForBlueprint = memoize(
	(
		blueprintIndex,
		extractors,
		minutesLeft,
		maxValues,
		blueprintCurrentMaxBiggestNumberOfGeodes
	) => {

		if (minutesLeft <= 0) {
			if (blueprintCurrentMaxBiggestNumberOfGeodes.val < extractors[GEODE].quantity) {
				blueprintCurrentMaxBiggestNumberOfGeodes.val = extractors[GEODE].quantity;
			}
			return extractors[GEODE].quantity;
		}

		// if (blueprintCurrentMaxBiggestNumberOfGeodes.val > extractors[GEODE].quantity) {
		// 	return 0;
		// }

		let biggestNumberOfGeode = 0;

		const robotTypes = ROBOT_TYPES.reverse();

		const extractorsCpy1 = {
			ore: { ...extractors[ORE] },
			clay: { ...extractors[CLAY] },
			obsidian: { ...extractors[OBSIDIAN] },
			geode: { ...extractors[GEODE] },
		};

		for (let robotType of robotTypes) {
			const extractorsCpy = {
				ore: { ...extractors[ORE] },
				clay: { ...extractors[CLAY] },
				obsidian: { ...extractors[OBSIDIAN] },
				geode: { ...extractors[GEODE] },
			};
			const [canCreateRobot, updatedResources] = canCreate(robotType, extractorsCpy);
			if (canCreateRobot && extractorsCpy[robotType].nbRobots < maxValues[robotType]) {
				const updatedExtractors = {
					ore: { ...extractors[ORE] },
					clay: { ...extractors[CLAY] },
					obsidian: { ...extractors[OBSIDIAN] },
					geode: { ...extractors[GEODE] },
				};
				updatedExtractors[robotType].nbInactiveRobots += 1;
				payRobot(updatedResources, updatedExtractors);
				collectResources(updatedExtractors);
				biggestNumberOfGeode = Math.max(
					biggestNumberOfGeode,
					biggestNumberOfGeodesForBlueprint(
						blueprintIndex,
						updatedExtractors,
						minutesLeft - 1,
						maxValues,
						blueprintCurrentMaxBiggestNumberOfGeodes
					)
				);
				if (robotType === GEODE) {
					break;
				}
			}
		}
		collectResources(extractorsCpy1);
		biggestNumberOfGeode = Math.max(
			biggestNumberOfGeode,
			biggestNumberOfGeodesForBlueprint(
				blueprintIndex,
				extractorsCpy1,
				minutesLeft - 1,
				maxValues,
				blueprintCurrentMaxBiggestNumberOfGeodes
			)
		);

		return biggestNumberOfGeode;
	}
);

const getMaxCost = (blueprint, mineral) => {
	const mineralCosts = Object.values(blueprint).map(item => item[mineral]);
	return Math.max(...mineralCosts);
};

const partOne = (input, time) => {
	const blueprints = extractInput(input);
	const blueprintsQualityLevels = {};
	Object.values(blueprints).forEach((blueprint, index) => {
		const extractors = {
			ore: {
				quantity: 0,
				nbRobots: 1,
				nbInactiveRobots: 0,
				robotCost: blueprint[ORE],
				collectingPower: 1,
			},
			clay: {
				quantity: 0,
				nbRobots: 0,
				nbInactiveRobots: 0,
				robotCost: blueprint[CLAY],
				collectingPower: 1,
			},
			obsidian: {
				quantity: 0,
				nbRobots: 0,
				nbInactiveRobots: 0,
				robotCost: blueprint[OBSIDIAN],
				collectingPower: 1,
			},
			geode: {
				quantity: 0,
				nbRobots: 0,
				nbInactiveRobots: 0,
				robotCost: blueprint[GEODE],
				collectingPower: 1,
			},
		};
		const maxValues = {
			ore: getMaxCost(blueprint, ORE),
			clay: getMaxCost(blueprint, CLAY),
			obsidian: getMaxCost(blueprint, OBSIDIAN),
			geode: Infinity,
		};

		console.log("File: day25.js, Line 270 maxValues: ", maxValues);
		let blueprintCurrentMaxBiggestNumberOfGeodes = { val: 0 };
		const biggestNumberOfGeodes = biggestNumberOfGeodesForBlueprint(
			index,
			extractors,
			time,
			maxValues,
			blueprintCurrentMaxBiggestNumberOfGeodes
		);

		console.log('File: day25.js, Line 301 blueprintCurrentMaxBiggestNumberOfGeodes: ', blueprintCurrentMaxBiggestNumberOfGeodes);
		blueprintsQualityLevels[index + 1] = biggestNumberOfGeodes * (index + 1);
		console.log(`quality levels: `, blueprintsQualityLevels);
	});
	return Object.values(blueprintsQualityLevels).reduce(
		(acc, val, index) => acc + val * (index + 1),
		0
	);
};

// console.log("PART 1 - example: ", partOne(exampleInput, 24));
console.log("PART 1 - real: ", partOne(realInput, 24));
