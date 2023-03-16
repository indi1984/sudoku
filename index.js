// SUDOKU
//kevinsBranch

const state = {
  player: {
    name: '',
    nickName: '',
    solvedPuzzles: 0,
  },
  difficultyLevel: '',
  selectedCell: '',
  coordinates: '',
  gameBoard: [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ],
  solutionBoard: [
    [3, 9, 1, 2, 8, 6, 5, 7, 4],
    [4, 8, 7, 3, 5, 9 ,1, 2, 6],
    [6, 5, 2, 7, 1, 4, 8, 3, 9],
    [8, 7, 5, 4, 3, 1, 6, 9, 2],
    [2, 1, 3, 9, 6, 7, 4, 8, 5],
    [9, 6, 4, 5, 2, 8, 7, 1, 3],
    [],
    [],
    [],
  ],
};


const board = document.querySelector('#board');
const numSelection = document.querySelector('#num-selection');
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const nickNameInput = document.querySelector('#nickname');
const difficultySelection = document.querySelector('#difficulty-selection');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  state.player.name = nameInput.value;
  state.player.nickName = nickNameInput.value;
  state.difficultyLevel = difficultySelection.value;
  console.log(state.player);
  console.log(state.difficultyLevel);
});


board.addEventListener('click', function(event) {
  const strCoordinates = event.target.dataset.coordinates.split(',');
  const coordinates = strCoordinates.map((element) => parseInt(element));
  state.coordinates = coordinates;
  state.selectedCell = event.target;
});


numSelection.addEventListener('click', function(event) {
  const curCell = state.selectedCell;
  const target = event.target;
  const num = parseInt(target.innerText);
  if (!curCell.innerText  && num && target.tagName === 'P') {
    curCell.innerText = num;
    const [x, y] = state.coordinates;
    state.gameBoard[x][y] = num;
  };
  const columns = getColumns();
});


function getColumns() {
  const returnArray = [];
  for (let column = 0; column < state.gameBoard.length; column++) {
    const col = [];
    for (let row = 0; row < state.gameBoard.length; row++) {
      col.push(state.gameBoard[row][column]);
    };
    returnArray.push(col);
  };
  return returnArray;
};

