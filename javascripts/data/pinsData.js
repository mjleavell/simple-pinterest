const loadPinsForBoard = boardId => {
  return new Promise((resolve, reject) => {
    $.get("../db/pins.json")
      .done(data => {
        // use == (not ===) because jQuery returns values as string, boardId gets returned as integer
        const pinsForBoards = data.pins.filter(pin => pin.board_id == boardId);
        resolve(pinsForBoards);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const loadPinsOnBoards = boards => {
  return new Promise((resolve, reject) => {
    $.get("../db/pins.json")
      .done(data => {
        // boards is an array of objects; map will iterate through the baords but 1 board will still be exposed
        const boardsWithPins = boards.map(board => {
          // if the filter function is true it will be passed into boardsWithPins
          const matchingPins = data.pins.filter(
            pin => pin.board_id === board.id
          );
          board.pins = matchingPins;
          return board;
        });
        resolve(boardsWithPins);
      })
      .fail(error => {
        reject("error loadPinsOnBoards", error);
      });
  });
};

export { loadPinsForBoard, loadPinsOnBoards };