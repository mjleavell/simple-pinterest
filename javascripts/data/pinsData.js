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

export { loadPinsForBoard };