module.exports = function getZerosCount(number) {
    
    var count = 0;

    while (number >= 5) {
        number = Math.floor(number / 5);
        count = count + number;
    }

    return count;
}

