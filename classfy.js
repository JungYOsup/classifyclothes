"use strict";

const clothes = [
  {
    type: "t",
    color: "blue",
    gender: "man",
    size: "small",
  },
  {
    type: "t",
    color: "yellow",
    gender: "woman",
    size: "medium",
  },
  {
    type: "t",
    color: "pink",
    gender: "man",
    size: "large",
  },
  {
    type: "p",
    color: "blue",
    gender: "man",
    size: "small",
  },
  {
    type: "p",
    color: "yellow",
    gender: "woman",
    size: "medium",
  },
  {
    type: "p",
    color: "pink",
    gender: "woman",
    size: "large",
  },
  {
    type: "s",
    color: "blue",
    gender: "man",
    size: "small",
  },
  {
    type: "s",
    color: "yellow",
    gender: "woman",
    size: "medium",
  },
  {
    type: "s",
    color: "pink",
    gender: "man",
    size: "large",
  },
];

const pantsButton = document.querySelector(".pants");
const skirtsButton = document.querySelector(".skirts");
const tshirsButton = document.querySelector(".tshirts");
const blueButton = document.querySelector(".blue");
const yellowButton = document.querySelector(".yellow");
const pinkButton = document.querySelector(".pink");
const ul = document.querySelector(".l_col");

pantsButton.addEventListener("click", () => {
  classify("p");
});
tshirsButton.addEventListener("click", () => {
  classify("t");
});
skirtsButton.addEventListener("click", () => {
  classify("s");
});
blueButton.addEventListener("click", () => {
  classify("blue");
});
yellowButton.addEventListener("click", () => {
  classify("yellow");
});
pinkButton.addEventListener("click", () => {
  classify("pink");
});

const removeAll = () => {
  const lists = document.querySelectorAll(".l_row");
  lists.forEach((list) => {
    ul.removeChild(list);
  });
};

const addClothes = (clothes) => {
  clothes.forEach((cloth) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    li.setAttribute("class", "l_row");
    div.setAttribute("class", "item");
    div.innerHTML = `<img src="img/${cloth.color}_${cloth.type}.png"> <p>${cloth.color}, ${cloth.gender} ${cloth.size} size</p>`;
    li.appendChild(div);
    ul.appendChild(li);
  });
};

const classify = (param) => {
  removeAll();
  let result;
  switch (param) {
    case "p":
      result = clothes.filter((cloth) => cloth.type === "p");
      addClothes(result);
      break;
    case "s":
      result = clothes.filter((cloth) => cloth.type === "s");
      addClothes(result);
      break;
    case "t":
      result = clothes.filter((cloth) => cloth.type === "t");
      addClothes(result);
      break;
    case "blue":
      result = clothes.filter((cloth) => cloth.color === "blue");
      addClothes(result);
      break;
    case "pink":
      result = clothes.filter((cloth) => cloth.color === "pink");
      addClothes(result);
      break;
    default:
      result = clothes.filter((cloth) => cloth.color === "yellow");
      addClothes(result);
  }
};

function init() {
  addClothes(clothes);
}

init();
