"use strict";



const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let allStands = [];

function Stand (location, minCustomer, maxCustomer, avgPurchase){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgPurchase = avgPurchase;
  this.hourlySales = [];
  this.totalCookies = 0;
  allStands.push(this);
}

let mainEl = document.querySelector("main");
let tableEl = document.querySelector("table");

Stand.prototype.cookiesPerHour = function () {
  return Math.floor((Math.random() * ((this.maxCustomer - this.minCustomer)+1) + this.minCustomer) * this.avgPurchase);
};


Stand.prototype.cookiesPerDay = function (){
  for (let i = 0; i < hours.length; i++){
    let cookiesBought = Math.ceil(this.cookiesPerHour());
    this.hourlySales.push(cookiesBought);
    this.totalCookies = cookiesBought + this.totalCookies;
  }
};

function createTable(){
  mainEl.appendChild(tableEl);
  for (let a = 0; a < allStands.length + 1; a++){
    if (a == 0){
      let newRow = document.createElement('tr');
      tableEl.appendChild(newRow);
      let blankHeader = document.createElement('th');
      blankHeader.innerText = "";
      tableEl.appendChild(blankHeader);
      for (let i = 0; i <hours.length; i++){
        let newTH = document.createElement("th");
        newTH.innerText = hours[i];
        tableEl.appendChild(newTH);}
      let totalTH = document.createElement('th');
      totalTH.innerText="Daily Location Total";
      tableEl.appendChild(totalTH);
    }
    if(a > 0){
      let newRow = document.createElement('tr');
      tableEl.appendChild(newRow);
      let locationHeader = document.createElement('th');
      locationHeader.innerText = allStands[a-1].location;
      tableEl.appendChild(locationHeader);  
      for (let b = 0; b < hours.length; b++) {
        let newTD = document.createElement("td");
        newTD.innerText = allStands[a-1].hourlySales[b];
        tableEl.appendChild(newTD);
      }let totalTD = document.createElement('td');
      totalTD.innerText= allStands[a-1].totalCookies;
      tableEl.appendChild(totalTD);
    }
  }
}

function finalRow(){
  let lastRow = document.createElement('tr');
  tableEl.appendChild(lastRow);
  let hourTotals = document.createElement('th');
  hourTotals.innerText = "Totals";
  tableEl.appendChild(hourTotals);
  let grandTotal = 0;
  for (let hour = 0; hour < hours.length; hour++){
    let sum = 0;
    for (let store = 0; store < allStands.length; store++){
      sum = sum + allStands[store].hourlySales[hour];
      grandTotal = grandTotal + allStands[store].hourlySales[hour];
    }let sumTD = document.createElement('td');
    sumTD.innerText = sum;
    tableEl.appendChild(sumTD);
  } let totalTD = document.createElement('td');
  totalTD.innerText = grandTotal;
  tableEl.appendChild(totalTD);
}



let seattle = new Stand('Seattle', 23, 65, 6.3);
let tokyo = new Stand('Tokyo', 3, 24, 1.2);
let dubai = new Stand('Dubai', 11, 38, 3.7);
let paris = new Stand('Paris', 20, 38, 2.3);
let lima = new Stand('Lima', 2, 16, 4.6);


seattle.cookiesPerHour();
seattle.cookiesPerDay();

tokyo.cookiesPerHour();
tokyo.cookiesPerDay();

dubai.cookiesPerHour();
dubai.cookiesPerDay();

paris.cookiesPerHour();
paris.cookiesPerDay();

lima.cookiesPerHour();
lima.cookiesPerDay();



createTable();
finalRow();

let formEl = document.getElementById("newStoreForm");
formEl.addEventListener('submit', submitForm);

//make variable for form element



function submitForm(formSubmission){
  formSubmission.preventDefault();

  let location = formSubmission.target.locationName.value;
  let minCust = formSubmission.target.minCustomer.value;
  let maxCust = formSubmission.target.maxCustomer.value;
  let avgPurchase = formSubmission.target.avgPurch.value;

  let store = new Stand(location, minCust, maxCust, avgPurchase);
  console.log(store);

  store.cookiesPerHour();
  store.cookiesPerDay();

  tableEl.innerHTML = '';

  createTable();
  finalRow();
}
formEl.addEventListener('submit', submitForm);