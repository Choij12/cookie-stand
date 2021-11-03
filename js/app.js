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
    city: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    aveCustomer: aveCustomer,
    averageCookie: 1.2
}

const dubai = {
    city: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    aveCustomer: aveCustomer,
    averageCookie: 3.7
}

const paris = {
    city: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    aveCustomer: aveCustomer,
    averageCookie: 2.3
}

const lima = {
    city: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    aveCustomer: aveCustomer,
    averageCookie: 4.6
}

for (i=0; i < 14; i++) {
    seattle.getAverage
}