// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

let whatCity = prompt("Vilken stad?");
const title = document.querySelector("title");
const cityName = document.querySelector("h2");
const main = document.querySelector("main");
const table = document.querySelector("#table")


for (i = 0; i <= 38; i++) {
    let div = document.createElement("div");
    table.append(div);
    div.setAttribute("class", "head_row")
    div.setAttribute("class", "cell")
    div.textContent = cities[i].id;
}

for (i = 0; i <= 38; i++) {
    let div = document.createElement("div");
    table.append(div);
    div.setAttribute("class", "head_column")
    div.setAttribute("class", "cell")
    div.textContent = cities[i].id + "-" + cities[i].name;
}

