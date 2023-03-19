const mainDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (mainDrivers) {
    return mainDrivers.slice(0, 2);
}
const returnLastTwoDrivers = function (mainDrivers) {
    return mainDrivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = function (multiplier){
    return function(value){
        return value * multiplier;
    }
}
const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(mainDrivers, selectedDrivers) {
    return selectedDrivers(mainDrivers);
}
