"use strict";

// Generate Number

let generateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Change Text Content
// attribute --> class/id to be targetted, context---> content to be changed
const changeTextContext = function (attribute, context) {
  document.querySelector(attribute).textContent = context;
};

// Decrease Score:

const decreaseScore = function () {
  changeTextContext(".score", String(score - 1));
  score--;
};

// Refresh when pressed again

document.querySelector(".again").addEventListener("click", function () {
  changeTextContext(".number", "?");
  changeTextContext(".message", "Start Guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  changeTextContext(".score", "20");
  score = 20;
  generateNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});

// Number check

document.querySelector(".check").addEventListener("click", function () {
  const inputValue = Number(document.querySelector(".guess").value);
  //No input value
  if (!inputValue) {
    changeTextContext(".message", "Enter Number");
  }
  //Correct Input Value
  else if (inputValue === generateNumber) {
    changeTextContext(".number", String(generateNumber));
    changeTextContext(".message", "Correct Number🎉");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (Number(highscore) < Number(score)) {
      changeTextContext(".highscore", score);
    }
  }
  //Wrong Input Value
  else {
    if (score > 1) {
      decreaseScore();
      if (inputValue > generateNumber) {
        if (inputValue - generateNumber > 5) {
          changeTextContext(".message", "Too High");
        } else {
          changeTextContext(".message", "High");
        }
      } else if (inputValue < generateNumber) {
        if (generateNumber - inputValue > 5) {
          changeTextContext(".message", "Too Low");
        } else {
          changeTextContext(".message", "Low");
        }
      }
    }
    //Lost
    else {
      changeTextContext(".score", "0");
      changeTextContext(".message", "Uh OH!! You Lost!");
      changeTextContext(".number", String(generateNumber));
      document.querySelector("body").style.backgroundColor = "#c90000";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});
