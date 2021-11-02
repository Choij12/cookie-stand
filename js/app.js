'use strict'

function randomCustPerHour(min, max) {
    let range = max - min +1;
    return Math.foor(Math.random() * range) + min;
}

const seattle = {
    city: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    averageCookie: 6.3,
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    aveCustomer: function() {
        for (let i =0; i < 14; i += 1) {
            let averageCust = seattle.aveCustomer * seattle.averageCookie;
            console.log() 
    }
}
}


const tokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    aveCustomer: customerPerHour,
    aveCookie: 1.2
}

const dubai = {
    minCustomer: 11,
    maxCustomer: 38,
    aveCustomer: customerPerHour,
    aveCookie: 3.7
}

const paris = {
    minCustomer: 20,
    maxCustomer: 38,
    aveCustomer: customerPerHour,
    aveCookie: 2.3
}

const lima = {
    minCustomer: 2,
    maxCustomer: 16,
    aveCustomer: customerPerHour,
    aveCookie: 4.6
}