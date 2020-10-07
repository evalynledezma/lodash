// Bootstrap
// How to Import Multiple Elements from a JavaScript File
import * as helper  from './helper';

console.log(helper.greeting);
console.log(helper.multiply(5, 6));


// Guide to Default Exports in JavaScript
import navigation, { greeting, multiply} from './navigation';

console.log(greeting);


// Helper
export function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

export const greeting = 'Hi there';

import moment from 'moment';


// Popular Moment JS Functions
// Epoch timestamp - number of seconds that have elapsed since January 1, 1970
moment.now();

// Creating a new date object for right now
moment();

// Creating date object with a specific date/format
const birthday = moment('1983-07-31', 'YYYY-MM-DD');

// Querying a named day of the week for a date
console.log(birthday.format('dddd'));

// Date counter
birthday.fromNow();

// Custom foramtted date
birthday.format("MMM Do YYYY");

// Date calculations
const twoWeeksFromNow = moment().add(14, 'days');
const anotherTwoWeeksFromNow = moment().add(2, 'weeks');
const sixMonthsAgo = moment().subtract(6, 'm'); 