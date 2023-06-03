const lightModeButton = document.getElementById('light-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');
const showAllButton = document.getElementById('show-all');
const itemBlock = document.getElementById('items');

function setLightTheme() {
    document.body.style.backgroundColor = 'Honeydew';
    itemBlock.style.color = 'Black';
}

function setDarkTheme() {
    document.body.style.backgroundColor = 'Gray';
    itemBlock.style.color = 'Black';
}

function showAll() {
  const ids = ["1", "2", "3", "4"];
  Array.from(itemBlock.children).forEach((div) => {
    const div_id = div.id;
    if (ids.includes(div_id)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}

lightModeButton.addEventListener('click', setLightTheme);
darkModeButton.addEventListener('click', setDarkTheme);
showAllButton.addEventListener('click',showAll)


const categories = {
  heavy: ["1", "3"],
  light: ["4"],
  medium: ["2"],

};

function showCards(event) {
  const category = event.target.id;
  const ids = categories[category];

  Array.from(itemBlock.children).forEach((div) => {
    const div_id = div.id;
    if (ids.includes(div_id)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}

heavy.addEventListener("click", showCards);
light.addEventListener("click", showCards);
medium.addEventListener("click", showCards);