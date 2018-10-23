import { loadBoards } from "../data/boardsData.js";
import { initialPinView } from "./pins.js";

const bindEvents = () => {
    // board click event
    $('#user-boards').on('click', '.board-card', (e) => {
        const clickedBoardId = $(e.target).closest('.board-card').attr('id');
        $('#boards-page').hide();
        $('#pins-page').show();
        initialPinView(clickedBoardId);
    })
    // back to boards click event
    $('#pins-page').on('click', '#toBoardsBtn', () => {
        $('#pins-page').hide();
        $('#boards-page').show();
    })
}

const writeBoards = (boards) => {
    let domString = '';
    boards.forEach((board) => {
        domString += `
        <div id="${board.id}" class="board-card p-2">
            <img class="card-img-top" src="./db/default-img.jpeg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${board.name}</h5>
                <p class="card-text">42 Pins</p>
            </div>
        </div>
        `
    })
    $('#user-boards').html(domString);
}

const initialBoardView = () => {
    loadBoards().then((boards) => {
        writeBoards(boards);
        bindEvents();
    }).catch((error) => {
        console.log(error);
    })
}

export {initialBoardView}