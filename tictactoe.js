
// accessing all elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;//playerX playerO
let winingScnerio = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { //playerO
            box.innerText = "O";
            turnO = false;
            box.classList.add("zoom");
            box.classList.add("color");
        }
        else { //playerX
            box.innerText = "X";
            turnO = true;
            box.classList.add("zoom");
            box.classList.add("color");
        }
        box.disabled = true;
        console.log("Box was clicked.");
        checkWinner();
    });
});

// newgame button
newGameBtn.addEventListener("click", () => {
    // console.log("new game clicked");
    enableBtns();
    turnO = true;
});

// reset button
resetBtn.addEventListener("click", () => {
    // console.log("Reset game cliked");
    enableBtns();
    turnO = true;
});

// disable button
const disableBtns = () => {
    msgContainer.classList.remove("hide");
    for(let box of boxes) {
        // box.classList.remove("zoom");
        // box.classList.remove("color");
        box.disabled = true;
    }
};

// enable button 
const enableBtns = () => {
    msgContainer.classList.add("hide");
    boxes.forEach((box) => {
        box.classList.remove("zoom");
        box.classList.remove("color");
        box.disabled = false;
        box.innerText = "";
    });
};

// show winner
const showWinner = (winner) => {
    msg.innerText = `Congratulate ! ${winner} your are Winner.`;
    disableBtns();
};

// check winnner
const checkWinner = () => {
    for (let win of winingScnerio) {
        let first = boxes[win[0]].innerText;
        let second = boxes[win[1]].innerText;
        let third = boxes[win[2]].innerText;
        if (first != "" || second != "" || third != "") {
            if (first === second && second === third) {
                console.log("winner is player", first);
                showWinner(first);
            }
        }
    };
};
