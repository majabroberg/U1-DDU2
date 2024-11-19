// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

let whatCity = prompt("Vilken stad?");
const title = document.querySelector("title");
const cityName = document.querySelector("h2");
const main = document.querySelector("main");
const table = document.querySelector("#table")
const city = document.querySelector("#cities")
const info = document.querySelector("h3")
let foundCity = false;
let id;

let furthest = distances[0].distance;
let closest = distances[0].distance;

//Cityboxes

for (i = 0; i <= 38; i++) {
    let div = document.createElement("div");
    city.append(div);
    div.setAttribute("class", "cityBox");
    div.setAttribute("id", i);
    div.textContent = cities[i].name;
}


// Gör det svart

for (i = 0; i <= 38; i++) {
    if (whatCity == cities[i].name) {
        document.getElementById(i).style.backgroundColor = "black";
        document.getElementById(i).style.color = "white";
        cityName.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
        title.textContent = cities[i].name;
        foundCity = true;
        id = i;
    }
}

if (foundCity != true) {
    cityName.textContent = whatCity + " finns inte i databasen";
    info.textContent = "";
    title.textContent = "Not Found";
}

// Hitta stad närmast och längst bort

for (const x of distances) {
    if (id === x.city1 || id === x.city2) {
        if (x.distance > furthest) {
            furthest = x.distance;
        }
        if (x.distance < closest) {
            closest = x.distance;
        }
    }
}


// Ändra text i h2

for (i = 0; i <= 38; i++) {
    if (whatCity == distances[i].name) {
        document.getElementById(i).style.backgroundColor = "black";
        document.getElementById(i).style.color = "white";
        cityName.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
        foundCity = true;
    }
}

//Ta bort text i h3

if (foundCity != true) {
    cityName.textContent = whatCity + " finns inte i databasen";
    info.textContent = "";
}

//Tabellen

for (i = 0; i <= 38; i++) {
    let column = document.createElement("div");
    table.append(column);
    column.setAttribute("class", "cell")
    column.textContent = cities[i].id + "-" + cities[i].name;

    for (j = 0; j <= 38; j++) {
        let row = document.createElement("div");
        table.append(row);
        row.setAttribute("class", "cell")
        row.textContent = cities[i].id;
    }
}





