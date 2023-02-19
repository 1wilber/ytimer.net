import seedrandom from 'seedrandom';
const turnMoves = [ 'R', 'U', 'L', 'D', 'F', 'B' ];
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

export function generateScrambleSync(count, size = 3,) {
  const hash = genRanHex(32).toString('hex')

  let hasDone = [];

  let scramble = [];

  for (let i = 0; i < count * 3; i += 3) {
    var move = turnMoves[Math.floor(seedrandom(hash + i).quick() * turnMoves.length)];

    let y = 0;

    while (hasDone.includes(move)) {
      y++;
      move = turnMoves[Math.floor(seedrandom(hash + parseInt(i.toString() + y)).quick() * turnMoves.length)];
    }

    if (move == 'U' || move == 'D' || move == 'F') {
      delete hasDone[hasDone.indexOf('R')];
      delete hasDone[hasDone.indexOf('L')];
    } else if (move == 'R' || move == 'L') {
      delete hasDone[hasDone.indexOf('U')];
      delete hasDone[hasDone.indexOf('D')];
      delete hasDone[hasDone.indexOf('F')];
    }

    if (!hasDone.includes(move)) {
      hasDone.push(move);
    }

    let isPrime = Math.floor(seedrandom(hash + i + 1).quick() * 2);
    let is2 = Math.floor(seedrandom(hash + i + 2).quick() * 2);

    if (isPrime)
      move += '\'';
    else if (is2)
      move += '2';

    if (size > 3) {
      let isSlice = Math.floor(seedrandom(hash + i + 3).quick() * ((size - 2) + 1));

      if (isSlice > 1)
        move = isSlice.toString() + move;
    }

    scramble.push(move);
  }

  return {
    scrambleMoves: scramble,
    scramble: scramble.join(' '),
    token: hash,
    size: count
  };
}
export default generateScrambleSync
