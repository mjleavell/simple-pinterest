import { loadPinsForBoard } from "../data/pinsData.js";

const bindEvent = () => {
  // back to boards click event
  $("#toBoardsBtn").click(() => {
    $("#pins-page").hide();
    $("#boards-page").show();
  });
};

const shortenLink = full_url => {
  const hostname = new URL(full_url).hostname;
  return hostname;
};

const writePins = pins => {
  let domString = "";
  pins.forEach(pin => {
    domString += `
          <div id="${pin.id}" class="pcard pin-card align-self-start p-2">
              <img class="card-img-top" src="${pin.image_url}" alt="image">
              <a href="${pin.link}" target="_blank" class="p-2">
                <button type="button" class="btn btn-light">${shortenLink(
                  pin.link
                )}</button>
              </a>  
          </div>
          `;
  });
  $("#pins-on-board").html(domString);
};

const initialPinView = boardId => {
  loadPinsForBoard(boardId)
    .then(data => {
      writePins(data);
      bindEvent();
    })
    .catch(error => {
      console.log("pins are messed up", error);
    });
};

export { initialPinView };
