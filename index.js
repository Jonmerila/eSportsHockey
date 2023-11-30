// team names
const teamTitleContainer = document.querySelector(".teamTitleContainer");
const teamTitleA = document.querySelector(".teamTitleA");
const changeTeamNameA = document.querySelector("#changeTeamNameA");
const teamTitleB = document.querySelector(".teamTitleB");
const changeTeamNameB = document.querySelector("#changeTeamNameB");

//player names + add player
const addPlayer = document.querySelector("#addPlayer");
const playerName = document.querySelector("#playerName");
const teamAList = document.querySelector(".teamAList");
const teamBList = document.querySelector(".teamBList");

addPlayer.addEventListener("click", () => {
  let playerLi = document.createElement("li");
  let leaveBtn = document.createElement("button");
  let changeBtn = document.createElement("button");
  let changeName = document.createElement("button");
  let nameOfPlayer = document.createElement("p");

  changeBtn.innerText = "Change Team";
  leaveBtn.innerText = "Leave Team";
  changeName.innerText = "Edit Name";

  nameOfPlayer.innerText = playerName.value;
  console.log(nameOfPlayer);
  if (teamAList.childElementCount < 5) {
    teamAList.append(playerLi);
    playerLi.append(nameOfPlayer, leaveBtn, changeBtn, changeName);
    playerName.value = "";
  } else if (teamBList.childElementCount < 5) {
    teamBList.append(playerLi);
    playerLi.append(nameOfPlayer, leaveBtn, changeBtn, changeName);
    playerName.value = "";
  } else {
    alert("Both teams are full!");
  }
  leaveBtn.addEventListener("click", () => {
    playerLi.remove();
  });

  changeBtn.addEventListener("click", () => {
    if (
      playerLi.parentElement.classList.contains("teamAList") &&
      teamBList.childElementCount < 5
    ) {
      teamBList.append(playerLi);
    } else if (
      playerLi.parentElement.classList.contains("teamBList") &&
      teamAList.childElementCount < 5
    ) {
      teamAList.append(playerLi);
    }
  });

  changeName.addEventListener("click", (event) => {
    if (event.target.parentElement.childElementCount < 5) {
      let nameInput = document.createElement("input");
      let confirmBtn = document.createElement("button");
      confirmBtn.innerText = "Confirm";
      nameInput.setAttribute("type", "text");
      playerLi.append(nameInput, confirmBtn);

      confirmBtn.addEventListener("click", () => {
        console.log(playerLi.firstChild.innerText);
        console.log(nameInput.value);
        playerLi.firstChild.innerText = nameInput.value;
        nameInput.value = "";
        nameInput.remove();
        confirmBtn.remove();
      });
    }
  });
});

// funktion för att byta namn
const changeTeamName = (event) => {
  if (event.target.parentElement.childElementCount < 4) {
    let nameInput = document.createElement("input");
    let confirmBtn = document.createElement("button");
    confirmBtn.innerText = "Confirm";
    nameInput.setAttribute("type", "text");
    event.target.parentElement.append(nameInput, confirmBtn);

    confirmBtn.addEventListener("click", () => {
      nameInput.previousElementSibling.previousElementSibling.innerText =
        nameInput.value;
      nameInput.remove();
      confirmBtn.remove();
    });
  }
};

// const changePlayerName = () => {
//   let nameInput = document.createElement("input");
//   let confirmBtn = document.createElement("button");
//   confirmBtn.innerText = "Confirm";
//   nameInput.setAttribute("type", "text");
// };

changeTeamNameA.addEventListener("click", changeTeamName);
changeTeamNameB.addEventListener("click", changeTeamName);
