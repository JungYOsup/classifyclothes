const pantsButton = document.querySelector(".pants");
const skirtsButton = document.querySelector(".skirts");
const tshirsButton = document.querySelector(".tshirts");
const ul = document.querySelector(".l_col");

const Classify = () => {
  const result = clothes.filter((cloth) => cloth.type === "p");
  addClothes(result);
};

pantsButton.addEventListener("click", Classify);
tshirsButton.addEventListener("click", Classify);
skirtsButton.addEventListener("click", Classify);

function addClothes(clothes) {
  console.log();
  for (let i = 0; i < clothes.length; i++) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    li.setAttribute("class", "l_row");
    div.setAttribute("class", "item");
    div.innerHTML = `<img src="img/${clothes[i].color}_${clothes[i].type}.png"> <p>${clothes[i].color}, ${clothes[i].gender} ${clothes[i].size} size</p>`;
    li.appendChild(div);
    ul.appendChild(li);
  }
}

function init() {
  addClothes(clothes);
}

init();
