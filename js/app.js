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

CookieStand.renderCity = function(tbl, city) {
    let trEl_two = document.createElement('tr');
    let thEl_four = document.createElement('th');
    thEl_four.textContent = city.name;
    trEl_two.id = city.id;
    trEl_two.appendChild(thEl_four);

    for (let i = 0; i < hours.length; j++) {
      let tdEl_one = document.createElement('td');
      tdEl_one.textContent = city.hourlyCookies[j];
      trEl_two.appendChild(tdEl_one);
    }

    var tdEl_two = document.createElement('td');
    tdEl_two.textContent = city.dailyCookies;
    trEl_two.appendChild(tdEl_two);

    tbl.appendChild(trEl_two);
};

(CookieStand.renderTable = function() {
  tbl = document.createElement('table');
  tbl.id = 'table';
  var trEl_one = document.createElement('tr');
  var thEl_one = document.createElement('th');
  thEl_one.textContent = '';
  trEl_one.appendChild(thEl_one);

  for (var i = 0; i < hours.length; i++) {
    var thEl_two = document.createElement('th');
    thEl_two.textContent = hours[i];
    trEl_one.appendChild(thEl_two);
  }

  var thEl_three = document.createElement('th');
  thEl_three.textContent = 'Totals';
  trEl_one.appendChild(thEl_three);

  tbl.appendChild(trEl_one);

  document.getElementById('city_data').appendChild(tbl);
})();