function getDistance(cityId1, cityId2) {
    for (let x of distances) {
        if ((x.city1 === cityId1 && x.city2 === cityId2) ||
            (x.city1 === cityId2 && x.city2 === cityId1)) {
            return x.distance / 10;
        }
    }
}

const title = document.querySelector("title");
const cityName = document.querySelector("h2");
const main = document.querySelector("main");
const table = document.querySelector("#table");
const city = document.querySelector("#cities")
const info = document.querySelector("h3")
const spanClosest = document.getElementById("closest")
const spanFurthest = document.getElementById("furthest")
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
    if (whatCity == cities[i].name) {
        document.getElementById(i).classList.add("target")
        cityName.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
        title.textContent = cities[i].name;
        foundCity = true;
        id = i;
    }
}

for (i = 0; i < cities.length; i++) {
    if (whatCity == distances[i].name) {
        document.getElementById(i).classList.add("target")
        cityName.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
        foundCity = true;
    }
}

if (foundCity != true) {
    cityName.textContent = whatCity + " finns inte i databasen";
    info.textContent = "";
    title.textContent = "Not Found";
}
else {
    for (const x of distances) {
        if (id === x.city1 || id === x.city2) {
            if (x.distance > furthest) {
                furthest = x.distance;
                if (id === x.city1) {
                    furthestId = x.city2;
                }
                else {
                    furthestId = x.city1;
                }

            }
            if (x.distance < closest) {
                closest = x.distance;
                if (id === x.city1) {
                    closestId = x.city2;
                }
                else {
                    closestId = x.city1;
                }
            }
        }
        for (const x of cities) {
            if (closestId == x.id) {
                closestName = x.name;
            }
            if (furthestId == x.id) {
                furthestName = x.name;
            }
        }
    }
    spanClosest.textContent = closestName;
    spanFurthest.textContent = furthestName;

    closest = closest / 10;
    furthest = furthest / 10;

    document.getElementById(closestId).textContent = closestName + " ligger " + closest + " mil bort "
    document.getElementById(closestId).classList.add("closest")

    document.getElementById(furthestId).textContent = furthestName + " ligger " + furthest + " mil bort "
    document.getElementById(furthestId).classList.add("furthest")
}





