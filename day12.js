const exampleInput = ["Sabqponm", "abcryxxl", "accszExk", "acctuvwj", "abdefghi"];

const realInput = [
	"abccccccccccccccccaaccccccccccccccccccccaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaa",
	"abcccccccccccccaaaaaccccccccccccccccccccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaa",
	"abccccccccccccccaaaaaccccccccccccccaaaaacccaaaaaacccccaaccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaa",
	"abccccccccccccccaaaaacccccccccaacccaaaaacccaaaaaaaccccaaaacaacaaccccccccccccccccccccccccaaaccccaaaccccccccccccaaaa",
	"abcccccccccccccaaaaacccccccaaaaaccaaaaaacccaaaaaaaacaaaaaacaaaaaccccccccccccccccccccccccaaacccaaaaccccccccccccaaac",
	"abccccccaacaaaccccaaccccccccaaaaacaaaaaaccaaaacaaaacaaaaaccaaaaaaccccccccccccccccccccccccaaaaaaaacccccccccccccaacc",
	"abccccccaaaaaaccccccccccccccaaaaacaaaaaaccaaaaccaaaacaaaaacaaaaaacccccccccccccccccccccccaaaaaaaaaccccccccccccccccc",
	"abccccccaaaaaacccccccccccccaaaaaccccaaccccaacccccaaccaacaacaaaaaccccccccccccccccccccccccccaaakkkkllllcccaaaccccccc",
	"abccccccaaaaaaacccccccccccccccaaccccaacccccccccccccccccccccccaaaccccccaaaacccccccccjjjjkkkkkkkkkkllllccccaacaccccc",
	"abcccccaaaaaaaacccccaaccccccccccccccaaaaaaccccccccccccccccccaaccccccccaaaaccccccccjjjjjkkkkkkkkkppllllcccaaaaacccc",
	"abcccccaaaaaaaaccaaaacccccccccccccccaaaaaccccccccccccccccaacaaccccccccaaaacccccccjjjjjjjkkkkkppppppplllccaaaaacccc",
	"abccccccccaaaccccaaaaaacccccccccccaaaaaaaccccccccccccccccaaaaacccccccccaacccccccjjjjoooooooppppppppplllcccaaaccccc",
	"abccccccccaaccccccaaaaaccccaacccccaaaaaaaaccccaaacccccccccaaaaaaacccccccccccccccjjjooooooooppppuuppppllcccaaaccccc",
	"abccccccaacccccccaaaaacccccaaaccaaaaaaaaaaccaaaaaaccccccaaaaaaaaaacaaaccccccccccjjjoooouuuoopuuuuupppllcccaaaccccc",
	"abacccccaaccccccccccaacccccaaaaaaaccaaaaaaccaaaaaaccccccaaaaaccaaaaaaaccccaaccccjjoootuuuuuuuuuuuuvpqlllcccccccccc",
	"abaccaaaaaaaacccccccccccccccaaaaaaccaacccccccaaaaacccccccacaaaccaaaaaaccaaaacaccjjooottuuuuuuuxyuvvqqljjccddcccccc",
	"abcccaaaaaaaaccccccccccccaaaaaaaaacaacaaccccaaaaaccccccccccaaaaaaaaaacccaaaaaacciijootttxxxuuxyyyvvqqjjjjdddcccccc",
	"abcccccaaaaccccaaacccccccaaaaaaaaacaaaaaccccaaaaaccccccccccccaaaaaaaaacccaaaaccciiinntttxxxxxxyyvvqqqqjjjddddccccc",
	"abccccaaaaaccccaaaaacccccaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaccaaaaccciiinntttxxxxxxyyvvvqqqqjjjdddccccc",
	"abccccaaaaaaccaaaaaccccccccaaaaaaaaaaaaaacccccccccccccccccccccccaaacaaacaacaaccciiinnnttxxxxxyyyvvvvqqqqjjjdddcccc",
	"SbccccaaccaaccaaaaacccccccccaaaaaaaaaaaaacccccccccccccccccccccccaaacccccccccccciiinnntttxxxEzzyyyyvvvqqqjjjdddcccc",
	"abcccccccccccccaaaaacccccccaaaaaaaaacaaaccccccccccccccccccccccccaaccccccccccccciiinnnttxxxxyyyyyyyyvvvqqqjjjdddccc",
	"abcccccccccccccaaccccccccccaaaaaaaaccccccccccccccccccccccccccccccccccccccccccciiinnntttxxyyyyyyyyyvvvvqqqjjjdddccc",
	"abccccccccccccccccccccccccaaaaaaaacccccccccccccccccccccccccccccccccccccccccccciiinntttxxxwwwyyywwvvvvrqqjjjjdddccc",
	"abcccccccccccccccccccccccccccaaaaaaccccccccccccccccccccccccccccccccccccccccccciinnntttxwwwwwyyywwvvvrrrqkkkeddcccc",
	"abcccccccccccccccccccccccccccaaaaaaccccccccccccccccccccccccccccccccccccccccccchhnnntttsswwswwyywwrrrrrrkkkkeeecccc",
	"abcccccccccccccccccccccccccccaaaaaacccccccccccccccccccaccccccccccccaaacccccccchhhnmmssssssswwwwwwrrrkkkkkeeeeecccc",
	"abcccccccccccccccccccccccccccccaaacccccccccccccccccccaaccccccccccaaaaaacccccaahhhmmmmmsssssswwwwrrrkkkkkeeeeeccccc",
	"abaacccccccccccccaccccccccccccccccccccccccccccccccaaaaacaacccccccaaaaaacaaaaaahhhhmmmmmmmmssswwwrrkkkkeeeeeacccccc",
	"abacccccccccccccaaaaaaaaccccccccaaacccccccaaccccccaaaaaaaacccccccaaaaaacaaaaaaahhhhmmmmmmmmsssrrrrkkkeeeeeaacccccc",
	"abaaaccccaaccccccaaaaaacccccccccaaacccaacaaaccccccccaaaacccccccccaaaaacccaaaaaaahhhhhhhmmmmlsssrrllkfeeeeaaaaacccc",
	"abaaaccaaaaccccccaaaaaacccccccccaaaaaaaaaaaaaacccccaaaaacccccccccaaaaacccaaaaaaachhhhhgggmllsssrrllkffeaaaaaaacccc",
	"abaacccaaaaaacccaaaaaaaacccccaaaaaaaaaaaaaaaaacccccaacaaacccccccccccccccaaaaaacccccchggggglllllllllfffaaaaaaaacccc",
	"abaaccccaaaacccaaaaaaaaaaccccaaaaaaaaacaaaaaaaccaccaccaaacccccccccccccccaaaaaacccccccccgggglllllllffffaaaaaacccccc",
	"abcccccaaaaacccaaaaaaaaaacccccaaaaaaaccaaaaacccaaaccccccccccccccccccccccccccaacccccccccagggglllllffffccccaaacccccc",
	"abcccccaacaaccccccaaaaacaccaacccaaaaaaaaaaaaaccaaacccccccccccccccccccccccccccccccccccccaagggggffffffcccccccccccccc",
	"abcccccccccccaaaaaaaaacccccaaccaaaaaaaccaaaaacaaaaccccccccccccccccccccccccccccccccccccaaaacgggfffffccccccccccccccc",
	"abcccccccccccaaaaacaacccaaaaaaaaaaccaacccaaaaaaaacccaaccccccccccccccccccccccccccccccccccccccggfffccccccccccccaaaca",
	"abccccccccccaaaaaaccccccaaaaaaaaacccccccccaaaaaaaaaaaacccccccccccccaaaccccccccccccccccccccccaaaccccccccccccccaaaaa",
	"abccccccccccaaaaaaccccccccaaaacccccccccccccaaaaaaaaaaaaccccccccccccaaaaccccccccccccccccccccccaaaccccccccccccccaaaa",
	"abcccccccccccaaaaacccccccaaaaaaccccccccccaaaaaaaaaaaaaaccccccccccccaaaaccccccccccccccccccccccccccccccccccccccaaaaa",
];

const ELEVATIONS = "abcdefghijklmnopqrstuvwxyz".split("");

const formatInput = input => {
	return input.map(item => item.split(""));
};

const getStartingPositions = (input, acceptedLetters) => {
	const startingPositions = [];
	acceptedLetters.forEach(letter => {
		input.forEach((row, yPos) => {
			row.forEach((col, xPos) => {
				if (col === letter) {
					startingPositions.push([yPos, xPos].join(":"));
				}
			});
		});
	});
	return startingPositions;
};

const getEndingPosition = input => {
	let xPos = 0;
	let yPos = 0;
	for (let i = 0; i < input.length; i++) {
		yPos = i;
		const tmpsPos = input[i].findIndex(letter => letter === "E");
		if (tmpsPos >= 0) {
			xPos = tmpsPos;
			break;
		}
	}
	return [yPos, xPos].join(":");
};

const itemInBounds = (input, yPos, xPos) => {
	return yPos >= 0 && yPos < input.length && xPos >= 0 && xPos < input[yPos].length;
};

const itemExists = (input, yPos, xPos) => {
	return itemInBounds(input, yPos, xPos) && !!input[yPos][xPos];
};

const canMoveFromTo = (from, to) => {
	if (from === "S") {
		from = "a";
	}
	if (to === "E") {
		to = "z";
	}

	return ELEVATIONS.indexOf(to) - ELEVATIONS.indexOf(from) <= 1;
};

const possibleDirections = (yPos, xPos, grid) => {
	const neighbours = [
		[yPos - 1, xPos],
		[yPos + 1, xPos],
		[yPos, xPos - 1],
		[yPos, xPos + 1],
	].filter(([y, x]) => itemExists(grid, y, x) && canMoveFromTo(grid[yPos][xPos], grid[y][x]));
	return neighbours;
};

const bfs = (start, end, grid) => {
	const visited = new Set();
	const queue = [[start, 0]];

	while (queue.length > 0) {
		const current = queue.shift();
		const currentMove = current[0].split(":").map(Number);
		const dirs = possibleDirections(...currentMove, grid).map(dir => dir.join(":"));

		for (const dir of dirs) {
			if (dir === end) {
				return current[1] + 1;
			}

			if (!visited.has(dir)) {
				visited.add(dir);
				queue.push([dir, current[1] + 1]);
			}
		}
	}
};

const firstPart = input => {
	const grid = formatInput(input);
	const start = getStartingPositions(grid, ["S"])[0];
	const end = getEndingPosition(grid);
	return bfs(start, end, grid);
};

const secondPart = input => {
	const grid = formatInput(input);
	const starts = getStartingPositions(grid, ["S", "a"]);
	const end = getEndingPosition(grid);

	const shortestPaths = starts.map(start => bfs(start, end, grid)).filter(path => !!path);
	return Math.min(...shortestPaths);
};

console.log("Part 1 example: ", firstPart(exampleInput));
console.log("Part 1 real: ", firstPart(realInput));

console.log("Part 2 example: ", secondPart(exampleInput));
console.log("Part 2 real: ", secondPart(realInput));
