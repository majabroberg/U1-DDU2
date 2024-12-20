function getDistance(cityId1, cityId2) {
    for (let space of distances) {
        if ((space.city1 === cityId1 && space.city2 === cityId2) ||
            (space.city1 === cityId2 && space.city2 === cityId1)) {
            return space.distance / 10;
        }
    }
}

const title = document.querySelector("title");
const cityName = document.querySelector("h2");
const main = document.querySelector("main");
const table = document.querySelector("#table");
const city = document.querySelector("#cities");
const info = document.querySelector("h3");
const spanClosest = document.getElementById("closest");
const spanFurthest = document.getElementById("furthest");
let foundCity = false;
let id;
let furthestId;
let closestId;
let furthestName;
let closestName;
let furthest = distances[0].distance;
let closest = distances[0].distance;
let whatCity = prompt("Vilken stad?");

for (i = 0; i < cities.length; i++) {
    let div = document.createElement("div");
    city.append(div);
    div.setAttribute("class", "cityBox");
    div.setAttribute("id", i);
    div.textContent = cities[i].name;
}

for (i = 0; i < cities.length; i++) {
    if (whatCity === cities[i].name) {
        document.getElementById(i).classList.add("target");
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

else {
    for (const sameId of distances) {
        if (id === sameId.city1 || id === sameId.city2) {
            if (sameId.distance > furthest) {
                furthest = sameId.distance;
                if (id === sameId.city1) {
                    furthestId = sameId.city2;
                }
                else {
                    furthestId = sameId.city1;
                }
            }
            if (sameId.distance < closest) {
                closest = sameId.distance;
                if (id === sameId.city1) {
                    closestId = sameId.city2;
                }
                else {
                    closestId = sameId.city1;
                }
            }
        }
        for (const findName of cities) {
            if (closestId === findName.id) {
                closestName = findName.name;
            }
            if (furthestId === findName.id) {
                furthestName = findName.name;
            }
        }
    }
    spanClosest.textContent = closestName;
    spanFurthest.textContent = furthestName;

    closest = closest / 10;
    furthest = furthest / 10;

    document.getElementById(closestId).textContent = closestName + " ligger " + closest + " mil bort ";
    document.getElementById(closestId).classList.add("closest");

    document.getElementById(furthestId).textContent = furthestName + " ligger " + furthest + " mil bort ";
    document.getElementById(furthestId).classList.add("furthest");
}

let grid = document.createElement("div");
table.appendChild(grid);

let emptyCol = document.createElement("div");
emptyCol.classList.add("cell");
emptyCol.textContent = " ";
emptyCol.style.height = "20px"
grid.append(emptyCol);

for (let city of cities) {
    let create = document.createElement("div");
    table.appendChild(create);
    create.textContent = city.id;
    create.classList.add("cell");
    create.classList.add("head_row");
}

for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    let create = document.createElement("div");
    table.appendChild(create);
    create.textContent = city.id + "-" + city.name;
    create.classList.add("cell");
    create.classList.add("head_column");

    if (i % 2 === 0) {
        create.classList.add("even_row");
    }

    for (let j = 0; j < cities.length; j++) {
        if (i === j) {
            let create = document.createElement("div");
            table.appendChild(create);
            create.classList.add("cell");
            if (i % 2 === 0) {
                create.classList.add("even_row");
            }
            if (j % 2 === 0) {
                create.classList.add("even_col");
            }
        }

        else {
            let distance = getDistance(cities[i].id, cities[j].id);
            let create = document.createElement("div");
            table.appendChild(create);
            create.textContent = distance;
            create.classList.add("cell");
            if (i % 2 === 0) {
                create.classList.add("even_row");
            }
            if (j % 2 === 0) {
                create.classList.add("even_col");
            }
        }
    }
}