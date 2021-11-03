`use strict`


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let city = [];
let tbl;

function CookieStand(name, minCustomer, maxCustomer, avgCustomer) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCustomer = avgCustomer;
    this.avgCookies = avgCookies;
    this.hourlyCookies = [];
    this.dailyCookies = 0;
    shops.push(this);

    CookieStand.generateHourly(this);
    CookieStand.renderCity(tbl, this)
}

CookieStand.prototype.generateRandom = function(min, max) {
    return Math.random() * (max - min) + min;
}

const seattle = new CookieStand('Seattle', 23, 65, 6.3)
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2)
const dubai = new CookieStand('Dubai', 11, 38, 3.7)
const paris = new CookieStand('Paris', 20, 38, 2.3)
const lima = new CookieStand('Lima', 2, 16, 4.6)

CookieStand.hourlyCookies = function () {
    for (let i = 0; i < this.hours.length; i +=1) {
        let avgCustomer = Math.floor.avgCustomer * generateRandom.minCustomer, maxCustomer;
 }
}

this.displayData = function() {
    this.calcHourlySales();

    const row = document.createElement('tr');
    const location = document.createElement('th');
    location.textContent = this.cityLocations;
    row.appendChild(location);

    for(let i = 0; i < hours.length; i +=1){
      const numCookie = document.createElement('td');
      numCookie.textContent = this.hourlyCookies[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
    const totalCookie = document.createElement('td');
      totalCookie.setAttribute("class", "total");
      totalCookie.textContent = this.dailyCookies;
      row.appendChild(totalCookie);
      tbl.appendChild(row);
  }

const tbl = document.createElement('table');
const headerRow = document.createElement('thead');
const emptyCell = document.createElement('td');
    emptyCell.setAttribute("class", "empty");
    headerRow.appendChild(emptyCell);
for (let i = 0; i < hours.length; i++) {
  let td = document.createElement('td');
  td.setAttribute("class", "cell");
  td.setAttribute("class", "hours");
  td.innerHTML = hours[i];
  headerRow.appendChild(td);
};

const dailyCookies = document.createElement('th');
dailyCookies.textContent = "Total";
headerRow.appendChild(dailyTotal);
tbl.appendChild(headerRow);

function displayAllCities(){
  for (let i = 0; i < city.length; i +=1) {
    city[i].displayData();
  }
}
displayAllCities();
document.body.appendChild(tbl);
