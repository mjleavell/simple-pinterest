import { loadPinsForBoard } from "../data/pinsData.js";

const initialPinView = (boardId) => {
    loadPinsForBoard(boardId);
}

export {initialPinView}